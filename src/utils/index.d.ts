import Router from './services/route';
declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.svg' {
  const content: string;
  export default content;
}
declare module '*.hbs' {
  const templateFunction: (param?: any) => string;
  export default templateFunction;
}

declare module '*.handlebars' {
  const templateFunction: (param?: any) => string;
  export default templateFunction;
}

