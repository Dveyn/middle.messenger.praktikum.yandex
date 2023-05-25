import { ErrorComponent } from '../../components/error';
import { renderDOM } from '../../utils/renderDom';

const errorPage = new ErrorComponent({
  code: 404,
  message: 'Не туда попали',
});

renderDOM('#app', errorPage);
