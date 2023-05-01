import tmpl from './link.hbs';
import Block from '../../utils/block';
import compile from '../../utils/compile';

interface LinkProps {
  text?: string,
  class?: string,
  imageBeforeClass?: string,
  imageBeforeSrc?: string,
  imageAfterClass?: string,
  imageAfterSrc?: string,
  imagesAlt: string,
  events?: any
}

export class Link extends Block {
  constructor(props: LinkProps) {
    super('div', props);
  }

  render() {
    return compile(tmpl, this.props);
  }
}
