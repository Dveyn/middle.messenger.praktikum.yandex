import tmpl from './error.hbs';
import Block from '../../../utils/block';
import compile from '../../../utils/compile';

import * as styles from './error.scss';

interface ErrorProps {
  text: string | undefined;
  class?: string;
}

export class ErrorInput extends Block {
  constructor(props: ErrorProps) {
    super('div', props);
  }

  render() {
    return compile(tmpl, {
      styles,
      ...this.props,
    });
  }
}
