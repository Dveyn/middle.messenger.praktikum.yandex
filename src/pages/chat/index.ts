import tmpl from './chat.hbs';
import Block from '../../utils/block';
import compile from '../../utils/compile';

import { Link, Input, ChatInfo } from '../../components';
import { isValid } from '../../utils/validator';
import { renderDOM } from '../../utils/renderDom';

export class Chat extends Block {
  constructor(props: any) {
    super('div', props);
  }

  _onFocusChange(event: Event) {
    const element = event.target as HTMLInputElement;
    if (!isValid(element)) {
      if (!element.classList.contains(this.props.styles['input-error'])) {
        element.classList.add(this.props.styles['input-error']);
      }
    } else {
      element.classList.remove(this.props.styles['input-error']);
    }
  }

  render() {
    const chatInfos: ChatInfo[] = [];

    for (let i = 0; i < 5; i++) {
      chatInfos.push(new ChatInfo({
        images: this.props.images,
        styles: this.props.styles,
        imagesAlt: "Чат",
        name: 'Андрей',
        time: '00:41',
        text: `Тестовое сообщене ${i}`,
        unread: Math.round(Math.random() * 10),
        events: {
          click: () => { renderDOM('#conversation', this.props.openConversation); },
        },
      }));
    }
    const linkProfileOpen = new Link({
      text: 'Профиль ',
      class: this.props.styles['link-profile-open'], 
      imageAfterSrc: this.props.icons.profilearrow,
      events: {
        click: () => { renderDOM('#app', this.props.openProfile); },
      },
    });

    const inputSearch = new Input({
      type: 'text',
      class: `${this.props.styles.input} ${this.props.styles['input-search-box']}`,
      name: 'search',
      placeholder: ' ',
      events: {
        blur: this._onFocusChange.bind(this),
        focus: this._onFocusChange.bind(this),
      },
    });

    return compile(tmpl, {
      chatInfos,
      linkProfileOpen,
      inputSearch,
      ...this.props,
    });
  }
}
