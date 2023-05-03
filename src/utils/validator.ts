const validationRules: Record<string, RegExp> = {
  name: /^[A-ZА-ЯЁ][а-яА-ЯёЁa-zA-Z-]*$/,
  surname: /^[A-ZА-ЯЁ][а-яА-ЯёЁa-zA-Z-]*$/,
  login: /^[0-9a-zA-Z\-_]{3,}/,
  password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$/,
  phone: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/,
  email: /^[^\s@]+@[^\s@]+\.[\S]{2,}$/,
  name: /^[A-ZА-ЯЁ][а-яА-ЯёЁa-zA-Z-]+$/,
  message: /.+/,
};
const errorMessages: Record<string, string> = {
  name: `Введите корректное имя (латиница или кириллица, 
                первая буква должна быть заглавной, без пробелов и цифр)`,
  surname: `Введите корректную фамилию (латиница или кириллица,
                 первая буква должна быть заглавной, без пробелов и цифр)`,
  login: `Введите корректный логин (от 3 до 20 символов латиницы, 
        возможно содержание цифр, дефиса или нижнего подчёркивания)`,
  password: `Введите корректный пароль (от 8 до 40 символов, обязательно 
            должна быть хотя бы одна заглавная буква и цифра)`,
  phone: `Введите корректный номер телефона
             (от 10 до 15 цифр, может начинаться с плюса)`,
  email: `Введите корректный адрес электронной почты (латиница, может включать цифры и 
            спецсимволы, обязательно должна быть «собака» (@) и 
            точка после неё, но перед точкой обязательно должны быть буквы)`,
  message: 'Введите сообщение',
};

interface ValidationResult {
  valid: boolean;
  reason?: string;
}

export function isValid(element: HTMLInputElement): ValidationResult {
  const eValidationType = element.dataset.validation;
  console.log(eValidationType);

  if (!eValidationType || !(eValidationType in validationRules)) {
    return { valid: true };
  }

  const rule = validationRules[eValidationType];

  if (element.value && element.value.search(rule) !== -1) {
    return { valid: true };
  }

  const reason = errorMessages[eValidationType];

  return { valid: false, reason };
}
