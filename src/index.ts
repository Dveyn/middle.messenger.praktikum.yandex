/* eslint-disable max-len */
import {
  Login, Signup, Chat, ProfileInfo, ProfileChange, ProfilePassword,
} from './pages';

import Router from './utils/services/router';
import { 
  validateCreateChat, validateLogin, validateSaveInfo, validateSavePassword, validateSignup,
  validateSendMessage, validateAddChatUser, validateDeleteChatUser, 
} from './utils/validator';
import GlobalEventBus from './utils/globaleventbus';
import { default as styles } from './styles.scss';
import User from './utils/user';
import UserController from './utils/controllers/user';
import ChatController from './utils/controllers/chat';
import MessagesController from './utils/controllers/messages';


function importAllImages(r: __WebpackModuleApi.RequireContext) {
  const images: Record<string, string> = {};
  r.keys().map((item) => { 
    console.log(item);
    
    images[item.replace('./', '').replace(/\.(svg|png|jpe?g)/, '')] = r(item).default;
  });
  return images;    
}


console.log('STYLE ===========>' + JSON.stringify(styles));


const icons = importAllImages(require.context('../static/icons/', false, /\.(png|jpe?g|svg)$/));

const user = new User();

const router = new Router('#app');

const g = new GlobalEventBus();

const userController = new UserController(router);
const chatController = new ChatController();
const messagesController = new MessagesController();


const assets = { styles, icons };
const initProps = { ...assets, router };

const login = new Login(initProps);

const signup = new Signup(initProps);

const chat = new Chat(initProps);

const profileInfo = new ProfileInfo(initProps);

const profileChange = new ProfileChange(initProps);

const profilePassword = new ProfilePassword(initProps);

function onGetUserSucceed(xhr: XMLHttpRequest) {
  const d = JSON.parse(xhr.responseText);
  user.setData(d);

  g.EventBus.emit(GlobalEventBus.EVENTS.USERDATA_UPDATED, user);
  router.go(window.location.pathname === '/' ? '/messenger' : window.location.pathname);
}

function onGetUserFailed() {
  router.go(window.location.pathname === '/sign-up' ? '/sign-up' : '/');
}

g.EventBus.on(GlobalEventBus.EVENTS.ACTION_INIT, userController.init.bind(userController));


g.EventBus.on(GlobalEventBus.EVENTS.ACTION_GETUSER, userController.getUser.bind(userController));
g.EventBus.on(GlobalEventBus.EVENTS.ACTION_GETUSER_SUCCEED, onGetUserSucceed);
g.EventBus.on(GlobalEventBus.EVENTS.ACTION_GETUSER_FAILED, onGetUserFailed);

g.EventBus.on(GlobalEventBus.EVENTS.VALIDATE_LOGIN, validateLogin);
g.EventBus.on(GlobalEventBus.EVENTS.ACTION_LOGIN, userController.login.bind(userController));
g.EventBus.on(GlobalEventBus.EVENTS.ACTION_LOGIN_SUCCEED, chatController.getChats.bind(chatController));
g.EventBus.on(GlobalEventBus.EVENTS.VALIDATE_SIGNUP, validateSignup);
g.EventBus.on(GlobalEventBus.EVENTS.ACTION_SIGNUP, userController.signup.bind(userController));
g.EventBus.on(GlobalEventBus.EVENTS.VALIDATE_SAVEINFO, validateSaveInfo);
g.EventBus.on(GlobalEventBus.EVENTS.ACTION_SAVEINFO, userController.saveInfo.bind(userController));
// g.EventBus.on(GlobalEventBus.EVENTS.ACTION_SAVEINFO_SUCCEED, onSaveInfoSucceed);

g.EventBus.on(GlobalEventBus.EVENTS.VALIDATE_SAVEPASSWORD, validateSavePassword);
g.EventBus.on(GlobalEventBus.EVENTS.ACTION_SAVEPASSWORD, userController.savePassword.bind(userController));
g.EventBus.on(GlobalEventBus.EVENTS.ACTION_LOGOUT, userController.logout.bind(userController));
g.EventBus.on(GlobalEventBus.EVENTS.ACTION_CHANGEAVATAR, userController.changeAvatar.bind(userController));
g.EventBus.on(GlobalEventBus.EVENTS.VALIDATE_SENDMESSAGE, validateSendMessage);
g.EventBus.on(GlobalEventBus.EVENTS.ACTION_SENDMESSAGE, messagesController.sendMessage.bind(messagesController));
g.EventBus.on(GlobalEventBus.EVENTS.VALIDATE_ADDCHATUSER, validateAddChatUser);
g.EventBus.on(GlobalEventBus.EVENTS.ACTION_ADDCHATUSER, chatController.addChatUser.bind(chatController));
g.EventBus.on(GlobalEventBus.EVENTS.ACTION_FINDUSER, userController.findUser.bind(userController));
g.EventBus.on(GlobalEventBus.EVENTS.VALIDATE_DELETECHATUSER, validateDeleteChatUser);
g.EventBus.on(GlobalEventBus.EVENTS.ACTION_DELETECHATUSER, chatController.deleteChatUser.bind(chatController));
g.EventBus.on(GlobalEventBus.EVENTS.ACTION_DELETECHAT, chatController.deleteChat.bind(chatController));



g.EventBus.on(GlobalEventBus.EVENTS.ACTION_GETCHATS, chatController.getChats.bind(chatController));
g.EventBus.on(GlobalEventBus.EVENTS.ACTION_GETCHATTOKEN, chatController.getChatToken.bind(chatController));
g.EventBus.on(GlobalEventBus.EVENTS.ACTION_GETCHATUSERS, chatController.getChatUsers.bind(chatController));
g.EventBus.on(GlobalEventBus.EVENTS.VALIDATE_CREATECHAT, validateCreateChat);
g.EventBus.on(GlobalEventBus.EVENTS.ACTION_CREATECHAT, chatController.createChat.bind(chatController));
g.EventBus.on(GlobalEventBus.EVENTS.ACTION_CONNECTCHAT, messagesController.connectChat.bind(messagesController));



router
  .use('/', login)
  .use('/sign-up', signup)
  .use('/messenger', chat)
  .use('/settings', profileInfo)
  .use('/settings-change', profileChange)
  .use('/settings-password', profilePassword)
  .start();


g.EventBus.emit(GlobalEventBus.EVENTS.ACTION_INIT);
