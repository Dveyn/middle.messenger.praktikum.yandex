declare module '*.hbs' {
  const templateFunction: (param?: any) => string;
  export default templateFunction;
}

declare module '*.handlebars' {
  const templateFunction: (param?: any) => string;
  export default templateFunction;
}
declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.svg' {
  const content: any;
  export default content;
}