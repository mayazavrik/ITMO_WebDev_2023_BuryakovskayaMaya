import 'uno.css';
import '@unocss/reset/tailwind.css';
import DOM from './src/constants/dom';
import {delay} from './src/utils/timeUtils';
import TasksModel from './src/mvc/model/TasksModel';
import TaskVO from './src/mvc/model/VO/TaskVO';
import TasksController from './src/mvc/controller/TasksController';

const KEY_LOCAL_TASKS = 'tasks';

const Tags = ['Web', 'Update', 'Design', 'Content'];



const getDOM = (id) => document.getElementById(id);
const QUERY = (container, id) => container.querySelector(`[data-id="${id}"]`);

const domTemplateTask = getDOM(DOM.Template.TASK);
const domTaskColumn = domTemplateTask.parentNode;

const tasksModel = new TasksModel();
const tasksController = new TasksController(tasksModel);

domTemplateTask.removeAttribute('id');
domTemplateTask.remove();

function renderTask(taskVO) {
  const domTaskClone = domTemplateTask.cloneNode(true);
  domTaskClone.dataset.id = taskVO.id;
  QUERY(domTaskClone, DOM.Template.Task.TITLE).innerText = taskVO.title;
  domTaskColumn.prepend(domTaskClone);
  return domTaskClone;
}


async function main() {
  tasksModel.addUpdateCallback((tasks) => {
    domTaskColumn.innerHTML = '';
    tasks.forEach((taskVO) => renderTask(taskVO));

  });
tasksController.retrieveTasks();


const taskOperations = {
  [DOM.Button.CREATE_TASK]: () => {
    renderTaskPopup(
      null,
      'Create task',
      'Create',
      (taskTitle, taskDate, taskTags) => {
        console.log('> Create task -> On Confirm');
        tasksController.createTask(taskTitle, taskDate, taskTags);
      }
    );
  },
  [DOM.Template.Task.BTN_DELETE]: (taskVO, domTask) => {
    renderTaskPopup(
      taskVO,
      'Confirm delete ask?',
      'Delete',
      (taskTitle, taskDate, taskTags) => {
        console.log('> Delete task -> On Confirm', {
          taskTitle,
          taskDate,
          taskTags,
        });
        const indexOfTask = tasks.indexOf(taskVO);
        tasks.splice(indexOfTask, 1);
        domTaskColumn.removeChild(domTask);
        saveTask();
      }
    );
  },
  [DOM.Template.Task.BTN_EDIT]: (taskVO, domTask) => {
    renderTaskPopup(
      taskVO,
      'Update task',
      'Update',
      (taskTitle, taskDate, taskTags) => {
        console.log('> Update task -> On Confirm', {
          taskTitle,
          taskDate,
          taskTags,
        });
        taskVO.title = taskTitle;
        const domTaskUpdated = renderTask(taskVO);
        domTaskColumn.replaceChild(domTaskUpdated, domTask);
        saveTask();
      }
    );
  },
};

domTaskColumn.onclick = (e) => {
  e.stopPropagation();
  console.log('domTaskColumn', e.target);
  const domTaskElement = e.target;
  const taskBtn = domTaskElement.dataset.btn;

  const isNotTaskBtn = !taskBtn;
  if (isNotTaskBtn) return;

  const allowedButtons = [
    DOM.Template.Task.BTN_EDIT,
    DOM.Template.Task.BTN_DELETE,
  ];
  if (!allowedButtons.includes(taskBtn)) return;

  let taskId;
  let domTask = domTaskElement;
  do {
    domTask = domTask.parentNode;
    taskId = domTask.dataset.id;
  } while (!taskId);

  const taskVO = tasks.find((task) => task.id === taskId);
  console.log('> taskVO:', taskVO);

  const taskOperation = taskOperations[taskBtn];
  if (taskOperation) {
    taskOperation(taskVO, domTask);
  }
};

getDOM(DOM.Button.CREATE_TASK).addEventListener(
  'click', (e) =>
  taskOperations[DOM.Button.CREATE_TASK]()
);

  


async function renderTaskPopup(
  taskVO,
  popupTitle,
  confirmText,
  processDataCallback
) {
  const domPopupContainer = getDOM(DOM.Popup.CONTAINER);
  const domSpinner = domPopupContainer.querySelector('.spinner');

  domPopupContainer.classList.remove('hidden');

  const onClosePopup = () => {
    document.onkeyup = null;
    domPopupContainer.children[0].remove();
    domPopupContainer.append(domSpinner);
    domPopupContainer.classList.add('hidden');
  };

  const TaskPopup = (await import('./src/mvc/view/popup/TaskPopup')).default;
  const taskPopupInstance = new TaskPopup(
    popupTitle,
    Tags,
    confirmText,
    (taskTitle, taskDate, taskTagss) => {
      console.log('Main -> renderTaskPopup: confirmCallback', {
        taskTitle,
        taskDate,
        taskTagss,
      });
      processDataCallback(taskTitle, taskDate, taskTagss);
      onClosePopup();
    },
    onClosePopup
  );

  if (taskVO) {
    taskPopupInstance.taskTitle = taskVO.title;
  }

  
  delay(1000).then(() => {
    console.log("render 1");
    domSpinner.remove();
  document.onkeyup = (e) => {
    if (e.key === 'Escape') {
      onClosePopup();
    }
  };
  domPopupContainer.append(taskPopupInstance.render());
  });


  console.log('render 0');
}

function saveTask() {
  localStorage.setItem(KEY_LOCAL_TASKS, JSON.stringify(tasks));
}

}

main();
