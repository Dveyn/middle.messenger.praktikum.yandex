import tmpl from './info.hbs';
import Block from '../../../utils/block';
import compile from '../../../utils/compile';

import { Link, Avatar } from '../../../components';
import { renderDOM } from '../../../utils/renderDom';

export class ProfileInfo extends Block {
  constructor(props: any) {
    super('div', props);
  }

  render() {
    const changeAvatar = new Avatar({
      ...this.props,
      imagesAlt: 'Аватар',
      events: {
        click: () => { renderDOM('#modal', this.props.linkChangeAvatar); },
      },
    });

    const linkProfileReturn = new Link({
      class: this.props.styles['arrow-button'],
      imageBeforeClass: this.props.styles['profile-return-button'],
      imageBeforeSrc: this.props.icons.arrowback,
      imagesAlt: 'Назад',
      events: {
        click: () => { renderDOM('#app', this.props.arrowBack); },
      },
    });

    const linkChangeInfo = new Link({
      class: this.props.styles['profile-info-link-change-info'],
      text: 'Изменить данные',
      imagesAlt: 'Изменить данные',
      events: {
        click: () => { renderDOM('#app', this.props.changeInfo); },
      },
    });
    const linkChangePassword = new Link({
      class: this.props.styles['profile-info-link-change-password'],
      text: 'Изменить пароль',
      imagesAlt: 'Изменить пароль',
      events: {
        click: () => { renderDOM('#app', this.props.changePassword); },
      },
    });
    const linkExit = new Link({
      class: this.props.styles['profile-info-link-exit'],
      text: 'Выйти',
      imagesAlt: 'Выйти',
      events: {
        click: () => { renderDOM('#app', this.props.linkClickExit); },
      },
    });

    return compile(tmpl, {
      changeAvatar,
      linkProfileReturn,
      linkChangeInfo,
      linkChangePassword,
      linkExit,
      ...this.props,
    });
  }
}