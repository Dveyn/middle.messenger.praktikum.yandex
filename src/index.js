import * as components from './components';
import * as pages from './pages';
import * as styles from './style.scss';
import * as utils from './utils/utils.js';
import images from '../static/images/avatar04.png';
import icons from '../static/icons/*';

const Handlebars = require('handlebars');

utils.fixFileNames(icons);

Handlebars.registerHelper('concat', function (...args) {
    return args.reduce((acc, current) => typeof current !== 'object' ? acc + ' ' + current : acc);
});
Handlebars.registerPartial('button', components.buttonTemplate);
Handlebars.registerPartial('input', components.inputTemplate);
Handlebars.registerPartial('label', components.labelTemplate);
Handlebars.registerPartial('chat-info', components.chatInfoTemplate);
Handlebars.registerPartial('avatarModal', components.avatarModalTemplate);
Handlebars.registerPartial('modal', components.modalTemplate);


document.querySelector('main').innerHTML = pages.loginTemplate({ styles });

document.addEventListener('click', function (e) {
    e.preventDefault();

    if (utils.hasClass(e, styles['login-form-button-secondary'])) {
        document.querySelector('main').innerHTML = pages.signupTemplate({ styles });
    } else if (utils.hasClass(e, styles['signup-form-button-secondary']) ||
               utils.hasClass(e, styles['profile-info-link-exit'])
    ) {
        document.querySelector('main').innerHTML = pages.loginTemplate({ styles });
    } else if (utils.hasClass(e, styles['login-form-button-primary']) ||
        utils.hasClass(e, styles['profile-return'])) {
        document.querySelector('main').innerHTML = pages.chatTemplate({ styles, images, icons });
    } else if (utils.hasClass(e, styles['chat-info-container'])) {
        document.querySelector('.' + styles['chat-right-container']).innerHTML = pages.conversationTemplate({ styles, images, icons });
    } else if (utils.hasClass(e, styles['link-profile-open']) ||
        utils.hasClass(e, styles['profile-change-return']) ||
        utils.hasClass(e, styles['profile-change-save-button']) ||
        utils.hasClass(e, styles['profile-change-password-return']) ||
        utils.hasClass(e, styles['profile-change-password-save-button'])) {
        document.querySelector('main').innerHTML = pages.profileInfoTemplate({ styles, images, icons });
    } else if (utils.hasClass(e, styles['profile-info-link-change-info'])) {
        document.querySelector('main').innerHTML = pages.profileChangeTemplate({ styles, images, icons });
    } else if (utils.hasClass(e, styles['profile-info-link-change-password'])) {
        document.querySelector('main').innerHTML = pages.profilePasswordTemplate({ styles, images, icons });
    } else if (utils.hasClass(e, styles['profile-avatar-wrapper'])) {
        document.querySelector('#modal').innerHTML = components.modalTemplate({ styles, images, icons, modalName: 'avatarModal' });
    } else if (e.target.className === styles['modal-container']) {
        document.querySelector('#modal').innerHTML = '';
    }
}, false);
