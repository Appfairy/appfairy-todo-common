import Appfairy from 'appfairy';
import css from './style.scss';
import html from './view.html';

class TodoItemView extends Appfairy.View(HTMLElement) {
  initializeStyle(style) {
    style.innerHTML = css;
  }

  initializeView(view) {
    view.innerHTML = html;
  }
}

Appfairy.View.define('todo-item', TodoItemView);

export default TodoItemView;
