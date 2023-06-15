import tmpl from './chat-info.hbs';
import Block from '../../utils/block';
import compile from '../../utils/compile';

export interface ChatInfoProps {
  title: string,
  time: string,
  imagesAlt: string,
  text: string,
  avatar: string,
  unread_count: string | number | undefined,
  styles: Record<string, any>,
  events?: {
    click: () => void
  }
}


export class ChatInfo extends Block {
  constructor(props: ChatInfoProps) {
    console.log(props.styles);
    
    super('div', props);
  }

  render() {
    return compile(tmpl, this.props);
  }
}
