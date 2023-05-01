import * as components from './components';
import * as pages from './pages';
import * as styles from './style.scss';
import * as utils from './utils/utils.js';
import * as layouts from './layouts';
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
document.querySelector('nav').innerHTML = layouts.nav();
document.addEventListener('click', function (e) {
    e.preventDefault();

    if (utils.hasClass(e, styles['login-form-button-secondary'])) {
        document.querySelector('main').innerHTML = pages.signupTemplate({ styles });
        history.pushState(null, null, "/register");
    } else if (utils.hasClass(e, styles['signup-form-button-secondary']) ||
        utils.hasClass(e, styles['profile-info-link-exit'])
    ) {
        document.querySelector('main').innerHTML = pages.loginTemplate({ styles });
        history.pushState(null, null, "/");
    } else if (utils.hasClass(e, styles['login-form-button-primary']) ||
        utils.hasClass(e, styles['profile-return'])) {
        document.querySelector('main').innerHTML = pages.chatTemplate({ styles, images, icons });
        history.pushState(null, null, "/chat");
    } else if (utils.hasClass(e, styles['chat-info-container'])) {
        document.querySelector('.' + styles['chat-right-container']).innerHTML = pages.conversationTemplate({ styles, images, icons });
        history.pushState(null, null, "/chat/info");
    } else if (utils.hasClass(e, styles['link-profile-open']) ||
        utils.hasClass(e, styles['profile-change-return']) ||
        utils.hasClass(e, styles['profile-change-save-button']) ||
        utils.hasClass(e, styles['profile-change-password-return']) ||
        utils.hasClass(e, styles['profile-change-password-save-button'])) {
        document.querySelector('main').innerHTML = pages.profileInfoTemplate({ styles, images, icons });
        history.pushState(null, null, "/profile");
    } else if (utils.hasClass(e, styles['profile-info-link-change-info'])) {
        document.querySelector('main').innerHTML = pages.profileChangeTemplate({ styles, images, icons });
        history.pushState(null, null, "/profile/edit");
    } else if (utils.hasClass(e, styles['profile-info-link-change-password'])) {
        document.querySelector('main').innerHTML = pages.profilePasswordTemplate({ styles, images, icons });
        history.pushState(null, null, "/profile/password");
    } else if (utils.hasClass(e, styles['profile-avatar-wrapper'])) {
        document.querySelector('#modal').innerHTML = components.modalTemplate({ styles, images, icons, modalName: 'avatarModal' });
    } else if (e.target.className === styles['modal-container']) {
        document.querySelector('#modal').innerHTML = '';
    }
}, false);

/* В планах во время 2 сринта переписать роутинг */
window.addEventListener('DOMContentLoaded', function () {
    routing(window.location.pathname);
});

window.addEventListener('popstate', function() {
    routing(window.location.pathname);
  });

function routing(path) {
    switch (path) {
        case "/":
            document.querySelector('main').innerHTML = pages.loginTemplate({ styles });
            history.pushState(null, null, "/");
            break;
        case "/register":
            document.querySelector('main').innerHTML = pages.signupTemplate({ styles });
            history.pushState(null, null, "/register");
            break;
        case "/chat":
            document.querySelector('main').innerHTML = pages.chatTemplate({ styles, images, icons });
            history.pushState(null, null, "/chat");
            break;
        case "/chat/info":
            document.querySelector('.' + styles['chat-right-container']).innerHTML = pages.conversationTemplate({ styles, images, icons });
            history.pushState(null, null, "/chat/info");
            break;
        case "/profile":
            document.querySelector('main').innerHTML = pages.profileInfoTemplate({ styles, images, icons });
            history.pushState(null, null, "/profile");
            break;
        case "/profile/edit":
            document.querySelector('main').innerHTML = pages.profileChangeTemplate({ styles, images, icons });
            history.pushState(null, null, "/profile/edit");
            break;
        case "/profile/password":
            document.querySelector('main').innerHTML = pages.profilePasswordTemplate({ styles, images, icons });
            history.pushState(null, null, "/profile/password");
            break;
        case "/404":
            document.querySelector('main').innerHTML = pages.error404Template({ styles });
            history.pushState(null, null, "/404");
            break;
        case "/500":
            document.querySelector('main').innerHTML = pages.error500Template({ styles });
            history.pushState(null, null, "/500");
            break;

        default:
            document.querySelector('main').innerHTML = pages.loginTemplate({ styles });
            history.pushState(null, null, "/");
            break;
    }
}
window.routing = routing;
