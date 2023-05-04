import tmpl from './conversation.hbs';
import Block from '../../utils/block';
import compile from '../../utils/compile';

import { Link, Input, ErrorInput } from '../../components';
import { isValid } from '../../utils/validator';
import { typeProps } from '../../type/typeClass';

export class Conversation extends Block {
  constructor(props: typeProps) {
    super('div', props);
  }

  render() {
    const inputMessage = new Input({
      type: 'textarea',
      class: `${this.props.styles.input} ${this.props.styles['input-conversation-message-box']}`,
      name: 'message',
      placeholder: 'Сообщение',
      validationType: 'message',
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
              if (prevError && prevError.parentNode) {
                prevError.parentNode.removeChild(prevError);
              }

              const error = new ErrorInput({ text: validationResult.reason, 
                class: this.props.styles['input-error'] });
                el.insertAdjacentElement('afterend', error.getContent());
            } else {
              const name = el.getAttribute('name');
              const { value } = el;
              if (name) {
                formData[name] = value;
              }
              el.classList.remove(this.props.styles['input-error']);
              const prevError = el.nextElementSibling as ErrorInput;
              if (prevError && prevError.parentNode) {
                prevError.parentNode.removeChild(prevError);
              }
            }
          });
          if (isFormValid) {
            console.log(formData);
          }
        },
      },
    });

    return compile(tmpl, {
      inputMessage,
      linkSend,
      ...this.props,
    });
  }
}
