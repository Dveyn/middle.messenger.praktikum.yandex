import { Input } from '../components';
import GlobalEventBus from './globaleventbus';

const VALIDATION_RULES: Record<string, RegExp> = {
  login: /^[0-9a-zA-Z\-_]{3,}/,
  password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$/,
  phone: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/,
  email: /^[^\s@]+@[^\s@]+\.[\S]{2,}$/,
  name: /^[A-ZА-ЯЁ][а-яА-ЯёЁa-zA-Z-]+$/,
  title: /^.+$/,
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
    
  if (!eValidationType || !(eValidationType in VALIDATION_RULES)) {
    return { valid: true };
  }

  const rule = VALIDATION_RULES[eValidationType];

  if (element.value && element.value.search(rule) !== -1) {
    return { valid: true };
  }
  const reason = errorMessages[eValidationType];

  return { valid: false, reason };
}

function isValidField(data: string, type: string): boolean {

  // console.log(data, rule);
  if (data.search(VALIDATION_RULES[type]) !== -1) {
    return true;
  }
  return false;
}

function validateInputs(inputs: Input[]) {

  let isFormValid = true;
  let formData: Record<string, any> = {};
  let compareFields: Record<string, string> = {};

  inputs.forEach(input => {
    const element = input.element as HTMLInputElement;
    if (element.dataset.validation) {
      const validations = element.dataset.validation.split(',');
      formData[element.name] = {
        value: element.value,
        isValid: true,
      };

      if (!isValidField(element.value, validations[0])) {
        isFormValid = false;
        formData[element.name].isValid = false;
      }

      if (validations.length > 1) {
        const [k, v] = validations[1].split('=');

        if (k === 'name') {
          compareFields[element.name] = v;
        }    
      }    
    }
  });
  Object.entries(compareFields).forEach(([key1, key2]) => {
    if (formData[key1].value !== formData[key2].value) {
      isFormValid = false;
      formData[key1].isValid = false;
    }
  });
  return [isFormValid, formData];
}

export function validateLogin(inputs: Input[]) {

  const [isFormValid, formData] = validateInputs(inputs);

  if (!isFormValid) {
    GlobalEventBus.instance.EventBus.emit(GlobalEventBus.EVENTS.VALIDATE_LOGIN_FAILED, formData);
  }  
}

export function validateSaveInfo(inputs: Input[]) {

  const [isFormValid, formData] = validateInputs(inputs);

  if (!isFormValid) {
    GlobalEventBus.instance.EventBus.emit(GlobalEventBus.EVENTS.VALIDATE_SAVEINFO_FAILED, formData);
  }  
}

export function validateSavePassword(inputs: Input[]) {

  const [isFormValid, formData] = validateInputs(inputs);

  if (!isFormValid) {
    GlobalEventBus.instance.EventBus.emit(GlobalEventBus.EVENTS.VALIDATE_SAVEPASSWORD_FAILED, formData);
  }  
}

export function validateSignup(inputs: Input[]) {

  const [isFormValid, formData] = validateInputs(inputs);

  if (!isFormValid) {
    GlobalEventBus.instance.EventBus.emit(GlobalEventBus.EVENTS.VALIDATE_SIGNUP_FAILED, formData);
  }  
}

export function validateCreateChat(inputs: Input[]) {

  const [isFormValid, formData] = validateInputs(inputs);

  if (!isFormValid) {
    GlobalEventBus.instance.EventBus.emit(GlobalEventBus.EVENTS.VALIDATE_CREATECHAT_FAILED, formData);
  }  
}

export function validateSendMessage(inputs: Input[]) {

  const [isFormValid, formData] = validateInputs(inputs);

  if (!isFormValid) {
    GlobalEventBus.instance.EventBus.emit(GlobalEventBus.EVENTS.VALIDATE_SENDMESSAGE_FAILED, formData);
  }  
}

export function validateAddChatUser(inputs: Input[]) {

  const [isFormValid, formData] = validateInputs(inputs);

  if (!isFormValid) {
    GlobalEventBus.instance.EventBus.emit(GlobalEventBus.EVENTS.VALIDATE_ADDCHATUSER_FAILED, formData);
  }  
}

export function validateDeleteChatUser(inputs: Input[]) {

  const [isFormValid, formData] = validateInputs(inputs);

  if (!isFormValid) {
    GlobalEventBus.instance.EventBus.emit(GlobalEventBus.EVENTS.VALIDATE_DELETECHATUSER_FAILED, formData);
  }  
}
