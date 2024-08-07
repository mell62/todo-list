export { renderTasks, swapBtns, selectLatestTaskTitle };
import { taskLibrary } from "../barrel";

const tasksContainer = document.querySelector(".tasks");

function createDeleteBtn() {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.classList.toggle("delete-btn");
  return deleteBtn;
}

function renderTasks() {
  cleanTasks();
  taskLibrary.forEach((item) => {
    createTask(item);
  });
  renderEditBtns();
  disableInput();
}

function cleanTasks() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    tasksContainer.removeChild(task);
  });
}

function createTask(item) {
  const taskElement = document.createElement("div");
  const taskTitle = document.createElement("input");
  taskTitle.setAttribute("value", item.taskTitle);
  taskTitle.classList.toggle("task-title");
  taskElement.appendChild(createDoneBtn());
  taskElement.appendChild(taskTitle);
  taskElement.appendChild(createDeleteBtn());
  taskElement.classList.toggle("task");
  tasksContainer.appendChild(taskElement);
}

function createDoneBtn() {
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✅";
  doneBtn.classList.toggle("done-btn");
  doneBtn.classList.add("task-editing");
  return doneBtn;
}

function createEditBtn() {
  const editBtn = document.createElement("button");
  editBtn.textContent = "🖉";
  editBtn.classList.toggle("edit-btn");
  editBtn.classList.add("task-editing");
  return editBtn;
}

function swapBtns(btn) {
  btn.classList.contains("done-btn") ? swapDoneBtn(btn) : swapEditBtn(btn);
}

function swapDoneBtn(doneBtn) {
  const task = doneBtn.closest(".task");
  doneBtn.remove();
  task.prepend(createEditBtn());
}

function swapEditBtn(editBtn) {
  const task = editBtn.closest(".task");
  editBtn.remove();
  task.prepend(createDoneBtn());
}

function renderEditBtns() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task, index) => {
    if (index !== tasks.length - 1) {
      const doneBtn = task.querySelector(".done-btn");
      swapBtns(doneBtn);
    }
  });
}

function disableInput() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    if (task.querySelector(".edit-btn")) {
      task.querySelector(".task-title").disabled = true;
    }
  });
}

function selectTaskTitle(task) {
  const taskTitle = task.querySelector(".task-title");
  taskTitle.select();
}

function selectLatestTaskTitle() {
  let numberOfTasks = taskLibrary.length;
  const tasks = document.querySelectorAll(".task");
  const latestTaskElement = tasks[numberOfTasks - 1];
  selectTaskTitle(latestTaskElement);
}
