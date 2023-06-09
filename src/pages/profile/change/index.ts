import tmpl from './change.hbs';
import {
  Label, Input, Button, Link, ErrorMessage, AvatarImage, ErrorInput,
} from '../../../components';

import compile from '../../../utils/compile';
import { isValid } from '../../../utils/validator';
import GlobalEventBus from '../../../utils/globaleventbus';
import User, { UserData } from '../../../utils/user';
import { config } from '../../../utils/config';
import Page, { PageProps } from '../../../utils/page';

export class ProfileChange extends Page {

  _errorMessage: ErrorMessage;

  constructor(props: PageProps) {
    super('div', props);
    this.g.EventBus.on(
      GlobalEventBus.EVENTS.VALIDATE_SAVEINFO_FAILED,
      this._onValidateSaveInfoFailed.bind(this));
    this.g.EventBus.on(
      GlobalEventBus.EVENTS.ACTION_SAVEINFO_FAILED,
      this._onActionSaveInfoFailed.bind(this));
    this.g.EventBus.on(
      GlobalEventBus.EVENTS.ACTION_SAVEINFO_SUCCEED,
      this._onActionSaveInfoSucceed.bind(this));
    
    this.g.EventBus.on(
      GlobalEventBus.EVENTS.USERDATA_UPDATED,
      this._onUserDataUpdated.bind(this));
  }

  private _onUserDataUpdated(user: User) {
    this.setProps({
      user: user.getData(),
    });
  }

  private _onValidateSaveInfoFailed(formData: { [index: string]: any }) {

    Object.keys(formData).forEach(key => {
      if (!formData[key].isValid) {
        const element = document.querySelector(`input[name=${key}]`);
        element?.classList.add(this.props.styles['input-error']);
        element?.previousElementSibling?.classList.add(this.props.styles['input-error']);
      }
    });
    throw new Error('Validation Error');
  }

  private _onActionSaveInfoFailed(res: XMLHttpRequest) {
    const text = JSON.parse(res.responseText).reason;
    this._errorMessage.setProps({
      'text': text,
      'class': this.props.styles.error,
    });
  }

  private _onActionSaveInfoSucceed(userData: UserData) {

    const user = User.instance;
    user.setData(userData);

    this.g.EventBus.emit(GlobalEventBus.EVENTS.USERDATA_UPDATED, user);

    this._errorMessage.setProps({
      'text': 'Info saved',
      'class': this.props.styles.error,
    });
  }

  private _onFocusChange(event: Event) {
    const element = event.target as HTMLInputElement;

    const validationResult = isValid(element);
    if (!validationResult.valid) {
        
      element.classList.add(this.props.styles['input-error']);
      element.previousElementSibling?.classList.add(this.props.styles['input-error']);
      const prevError = element.nextElementSibling as ErrorInput;
      if (prevError && prevError.parentNode && prevError instanceof ErrorInput) {
        prevError.parentNode.removeChild(prevError);
      }
         
      const error = new ErrorInput({ text:validationResult.reason, class: this.props.styles['input-error'] });
      element.insertAdjacentElement('afterend', error.getContent());
     
    } else {
      element.classList.remove(this.props.styles['input-error']);
      element.previousElementSibling?.classList.remove(this.props.styles['input-error']);
      const prevError = element.nextElementSibling as ErrorInput;
      if (prevError && prevError.parentNode && prevError instanceof ErrorInput) {
        prevError.parentNode.removeChild(prevError);
      }
    }
  }

  render() {

    const src = User.instance.getData('avatar')
      ? config.resourceUrl + User.instance.getData('avatar')
      : this.props.icons.user;

    const avatarImage = new AvatarImage({
      class: this.props.styles['profile-avatar-image'],
      src,
    });
      

    const inputEmail = new Input({
      type: 'text',
      class: `${this.props.styles.input} ${this.props.styles['profile-change-field-value']}`,
      name: 'email',
      validationType: 'email',
      value: this.props.user?.email,
      events: {
        blur: this._onFocusChange.bind(this),
        focus: this._onFocusChange.bind(this),
      },
    });
    const inputLogin = new Input({
      type: 'text',
      class: `${this.props.styles.input} ${this.props.styles['profile-change-field-value']}`,
      name: 'login',
      validationType: 'login',
      value: this.props.user?.login,
      events: {
        blur: this._onFocusChange.bind(this),
        focus: this._onFocusChange.bind(this),
      },
    });
    const inputFirstName = new Input({
      type: 'text',
      class: `${this.props.styles.input} ${this.props.styles['profile-change-field-value']}`,
      name: 'first_name',
      validationType: 'name',
      value: this.props.user?.first_name,
      events: {
        blur: this._onFocusChange.bind(this),
        focus: this._onFocusChange.bind(this),
      },
    });
    const inputSecondName = new Input({
      type: 'text',
      class: `${this.props.styles.input} ${this.props.styles['profile-change-field-value']}`,
      name: 'second_name',
      validationType: 'name',
      value: this.props.user?.second_name,
      events: {
        blur: this._onFocusChange.bind(this),
        focus: this._onFocusChange.bind(this),
      },
    });
    const inputDisplayName = new Input({
      type: 'text',
      class: `${this.props.styles.input} ${this.props.styles['profile-change-field-value']}`,
      name: 'display_name',
      validationType: 'name',
      value: this.props.user?.display_name,
      events: {
        blur: this._onFocusChange.bind(this),
        focus: this._onFocusChange.bind(this),
      },
    });
    const inputPhone = new Input({
      type: 'text',
      class: `${this.props.styles.input} ${this.props.styles['profile-change-field-value']}`,
      name: 'phone',
      validationType: 'phone',
      value: this.props.user?.phone,
      events: {
        blur: this._onFocusChange.bind(this),
        focus: this._onFocusChange.bind(this),
      },
    });

    const linkProfileChangeReturn = new Link({
      class: this.props.styles['arrow-button'],
      imageBeforeClass: this.props.styles['profile-return-button'],
      imageBeforeSrc: this.props.icons.arrowback,
      events: {
        click: () => {
          this._errorMessage.setProps({
            'text': '',
            'class': `${this.props.styles.error} ${this.props.styles['error-hide']}`,
          });
          this.props.router.go('/settings');
        },
      },
    });

    const errorMessage = new ErrorMessage({
      class: `${this.props.styles.error} ${this.props.styles['error-hide']}`,
    });

    const buttonSave = new Button({
      text: 'Сохранить',
      class: `${this.props.styles.button} ${this.props.styles['profile-change-save-button']}`,
      events: {
        click: (e) => {
          e.preventDefault();

          const inputs = [
            inputEmail, inputLogin, inputFirstName, inputSecondName, inputPhone, inputDisplayName,
          ];

          try {
            this.g.EventBus.emit(GlobalEventBus.EVENTS.VALIDATE_SAVEINFO, inputs);
            this.g.EventBus.emit(GlobalEventBus.EVENTS.ACTION_SAVEINFO, inputs);

          } catch (error) {
            console.log('Error caught', error);
          }
        },
      },
    });

    const labelEmail = new Label({
      text: 'Почта',
      class: this.props.styles['profile-info-field-name'],
    });
    const labelLogin = new Label({
      text: 'Логин',
      class: this.props.styles['profile-info-field-name'],
    });
    const labelFirstName = new Label({
      text: 'Имя',
      class: this.props.styles['profile-info-field-name'],
    });
    const labelSecondName = new Label({
      text: 'Фамилия',
      class: this.props.styles['profile-info-field-name'],
    });
    const labelDisplayName = new Label({
      text: 'Имя в чате',
      class: this.props.styles['profile-info-field-name'],
    });
    const labelPhone = new Label({
      text: 'Телефон',
      class: this.props.styles['profile-info-field-name'],
    });

    this._errorMessage = errorMessage;

    return compile(tmpl, {
      styles: this.props.styles,
      images: this.props.images,
      avatarImage,
      labelEmail,
      labelLogin,
      labelFirstName,
      labelSecondName,
      labelDisplayName,
      labelPhone,
      inputEmail,
      inputLogin,
      inputFirstName,
      inputSecondName,
      inputDisplayName,
      inputPhone,
      linkProfileChangeReturn,
      errorMessage,
      buttonSave,
    });
  }
}
