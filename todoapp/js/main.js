const taskForm = document.querySelector('.task__form'),
      taskInput = document.querySelector('.task__input'),
      taskList = document.querySelector('.task__list'),
      taskTitle = document.querySelector('.task__title');

// Добовляем задачу
taskForm.addEventListener('submit', () => {
  
  let taskTextInput = taskInput.value;

  taskTextInput = taskTextInput.trim();

  const taskTextAdd = `
  <li class="task__item">
  <span contenteditable="true" class="task__text">${taskTextInput}</span>
    <div class="task__btn-wrap">
      <button class="task__btn-delete task__btn-ready" data-ready="ready-task" type="submit">Готово</button>
      <button class="task__btn-delete" data-action="delete-task" type="submit">Удалить</button>
    </div>
  </li>
  `
  
  taskList.insertAdjacentHTML('afterbegin', taskTextAdd);

  taskInput.value = '';
  taskInput.focus();


  toggleEmptyListText();
  showNotification('new');

});

// Удаляем задачу
taskList.addEventListener('click', function(e) {

  let liElement = e.target.closest('.task__item');
  let taskElement = e.target.closest('.task__item');

  if (e.target.getAttribute('data-action') == 'delete-task') {  

    liElement.remove();
    showNotification('delete');

  } else if (e.target.getAttribute('data-ready') == 'ready-task') {

    taskElement.querySelector('.task__text').classList.add('task__text--done');

    taskElement.querySelector('.task__text').setAttribute('contenteditable', 'false');

    taskList.insertAdjacentElement('beforeend', liElement);

    e.target.remove();
    showNotification('done');
  }

  toggleEmptyListText();

});

// Добовляем/Удаляем пустой список или нет
function toggleEmptyListText() {
  
  if (taskList.children.length > 1) {
    document.querySelector('.task__item--none').style.display = 'none';
    taskTitle.classList.remove('task__title--none');
  } else {
    document.querySelector('.task__item--none').style.display = 'flex';
    taskTitle.classList.add('task__title--none');
  }

};

function showNotification(type) {

  const showBg = document.querySelector('.notification');

  const notificationActive = document.createElement('div');
        notificationActive.className = 'notification__item notification__item-green';
        notificationActive.textContent = 'Задача добавлена';

  const notificationDelete = document.createElement('div');
        notificationDelete.className = 'notification__item notification__item-red';
        notificationDelete.textContent = 'Задача удалена';

  const notificationDone = document.createElement('div');
        notificationDone.className = 'notification__item notification__item-black';
        notificationDone.textContent = 'Задача готова';

      showBg.classList.add('notification-active');

  let notificationBgElement;

      switch(type) {
        case 'new':
          notificationBgElement = notificationActive;
          break;
        case 'delete':
          notificationBgElement = notificationDelete;
          break;
        case 'done':
          notificationBgElement = notificationDone;
          break;
      }

      document.querySelector('.notification').insertAdjacentElement('afterbegin', notificationBgElement);


      setTimeout(function() {
        notificationBgElement.style.display = 'none';
        showBg.classList.remove('notification-active');
      }, 2000);

};