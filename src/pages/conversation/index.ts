import tmpl from './conversation.hbs';
import compile from '../../utils/compile';

import { Link, Input, Message, Image, Label, ErrorInput } from '../../components';
import GlobalEventBus from '../../utils/globaleventbus';
import User from '../../utils/user';
import { renderDOM } from '../../utils/renderDom';
import { ChatActions } from '../modals';
import { config } from '../../utils/config';
import Page, { PageProps } from '../../utils/page';
import { isValid } from '../../utils/validator';

interface MessageData {
  id: number,
  user_id: number,
  chat_id: number,
  type: string,
  time: string,
  content: string | undefined,
  is_read: boolean,
  file: string | undefined
}

interface ChatUserData {
  id: number,
  first_name: string,
  second_name: string,
  display_name?: string,
  login: string,
  avatar?: string,
  email: string,
  phone: string,
  role: string,
}

export class Conversation extends Page {

  private _messages: Message[];

  constructor(props: PageProps) {
    super('div', props);

    this.g.EventBus.on(
      GlobalEventBus.EVENTS.MESSAGES_RECEIVED,
      this._onMessagesReceived.bind(this));
    this.g.EventBus.on(
      GlobalEventBus.EVENTS.ACTION_GETCHATUSERS_SUCCEED,
      this._onGetChatUsersSucceed.bind(this));
    this.g.EventBus.on(
      GlobalEventBus.EVENTS.VALIDATE_SENDMESSAGE_FAILED,
      this._onValidateSendMessageFailed.bind(this));

    this._messages = [];
  }

  private _onGetChatUsersSucceed(data: any) {

    const { users }: { users: ChatUserData[] } = data;
    const chatUsers: Image[] = [];

    users.forEach((user) => {

      let avatar = this.props.icons.user;
     
      if (user.avatar) {
        avatar = config.resourceUrl + user.avatar;
      }

      console.log(avatar);
      const displayName = user.display_name
        ? user.display_name
        : `${user.first_name} ${user.second_name}`;


      chatUsers.push(new Image({
        src: avatar,
        class: this.props.styles['avatar-image'],
      }));
      chatUsers.push(new Label({
        text: displayName,
        class: this.props.styles['conversation-user-name'],
      }));

    });
    this.setProps({
      chatUsers,
    });

  }

  private _onValidateSendMessageFailed(formData: { [index: string]: any }) {

    Object.keys(formData).forEach(key => {
      if (!formData[key].isValid) {
        const element = document.querySelector(`input[name=${key}]`);
        element?.classList.add(this.props.styles['input-error']);
      }
    });
    throw new Error('Validation Error');
  }

  private _onMessagesReceived(data: any) {

    const messagesData: MessageData[] | MessageData = JSON.parse(data);

    let previousDate: Date;

    if (messagesData instanceof Array) {
      messagesData.reverse();

      messagesData.forEach((message) => {

        const messageDate = new Date(message.time);
        if (!previousDate || previousDate.toLocaleDateString() !== messageDate.toLocaleDateString()) {
          this._messages.push(new Message({
            isMessage: false,
            date: `${messageDate.getDate()} ${config.monthsNames[messageDate.getMonth()]}`,
            styles: this.props.styles,
          }));
        }
        previousDate = messageDate;

        const timeString = `${messageDate.getHours()}:${messageDate.getMinutes()}`;
        const self = User.instance.getData('id') == message.user_id;

        this._messages.push(new Message({
          isMessage: true,
          styles: this.props.styles,
          icons: this.props.icons,
          text: message.content,
          time: timeString,
          isRead: message.is_read,
          file: message.file,
          self,
        }));
      });

      this.setProps({
        messages: this._messages,
      });

    } else if (messagesData.type === 'message') {

      const messageDate = new Date(messagesData.time);
      const timeString = `${messageDate.getHours()}:${messageDate.getMinutes()}`;
      const self = User.instance.getData('id') == messagesData.user_id;

      this._messages.push(new Message({
        isMessage: true,
        styles: this.props.styles,
        icons: this.props.icons,
        text: messagesData.content,
        time: timeString,
        isRead: messagesData.is_read,
        file: messagesData.file,
        self,
      }));
      this.setProps({
        messages: this._messages,
      });
    }
  }

  render() {

    const messages: Message[] = [];
    const chatUsers: [] = [];

    const conversationActionsLink = new Image({
      src: this.props.icons.threedots,
      class: this.props.styles['actions-button'],
      events: {
        click: () => {
          renderDOM('#modal', new ChatActions(this.props));
        },
      },
    });

    const inputMessage = new Input({
      type: 'textarea',
      class: `${this.props.styles.input} ${this.props.styles['input-conversation-message-box']}`,
      name: 'message',
      validationType: 'message',
      placeholder: 'Сообщение',
    });

    const linkSend = new Link({
      class: this.props.styles['arrow-button'],
      imageBeforeClass: this.props.styles['send-button'],
      imageBeforeSrc: this.props.icons.arrow,
      imagesAlt: 'Отправить сообщение',
      events: {
        click: () => {

          const inputs = [inputMessage];

          const formData: { [index: string]: any } = {};
          let isFormValid = true;
          inputs.map((input) => {
            const el = input.element as HTMLInputElement;
            const validationResult = isValid(el);
            if (!validationResult.valid) {
              isFormValid = false;
              el.classList.add(this.props.styles['input-error']);

              const prevError = el.nextElementSibling as ErrorInput;
              if (prevError && prevError.parentNode && prevError instanceof ErrorInput) {
                prevError.parentNode.removeChild(prevError);
              }

              const error = new ErrorInput({
                text: validationResult.reason,
                class: this.props.styles['input-error'],
              });
              el.insertAdjacentElement('afterend', error.getContent());
            } else {
                
              const name = el.getAttribute('name');
              const { value } = el;
              if (name) {
                formData[name] = value;
              }
              el.classList.remove(this.props.styles['input-error']);
              const prevError = el.nextElementSibling as ErrorInput;
              if (prevError && prevError.parentNode && prevError instanceof ErrorInput) {
                prevError.parentNode.removeChild(prevError);
              }
            }
          });
          //Мне внимательность нужно еще прокачать, закоментировал отправку и забыл про это
          if (isFormValid) {
            try {
              this.g.EventBus.emit(GlobalEventBus.EVENTS.VALIDATE_SENDMESSAGE, inputs);
              this.g.EventBus.emit(GlobalEventBus.EVENTS.ACTION_SENDMESSAGE, inputs);
            } catch (error) {
              console.log('Error on send message: ', error);
            }
          }


        },
      },
    });

    return compile(tmpl, {
      conversationActionsLink,
      inputMessage,
      chatUsers,
      messages,
      linkSend,
      ...this.props,
    });
  }
}
