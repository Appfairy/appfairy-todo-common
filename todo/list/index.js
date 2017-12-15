import Appfairy from 'appfairy';
import css from './style.scss';
import html from './view.html';

class TodoListView extends Appfairy.View(HTMLElement) {
  initializeStyle(style) {
    style.innerHTML = css;
  }

  initializeView(view) {
    view.innerHTML = html;

    const todo = view.querySelector('.todo');

    todo.show = function (proxy) {
      Appfairy.Socket.prototype.show.call(this, proxy);

      this.animate([
        {
          opacity: '0',
          transform: 'translateX(200px)',
        },
        {
          opacity: '1',
          transform: 'translateX(0)',
        }
      ], {
        duration: 500,
        easing: 'ease',
      });
    };

    todo.hide = function (proxy) {
      const animation = this.animate([
        {
          opacity: '1',
          transform: 'translateX(0)',
        },
        {
          opacity: '0',
          transform: 'translateX(200px)',
        }
      ], {
        duration: 500,
        easing: 'ease',
      });

      animation.onfinish = Appfairy.Socket.prototype.hide.bind(this, proxy);
    };
  }
}

Appfairy.View.define('todo-list', TodoListView);

export default TodoListView;
