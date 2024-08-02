export { renderTasks, deleteTask };
import { taskLibrary, removeTask } from "../barrel";

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
}

function cleanTasks() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    tasksContainer.removeChild(task);
  });
}

function deleteTask(deleteBtn) {
  const deleteBtns = document.querySelectorAll(".delete-btn");
  const deleteBtnIndex = Array.prototype.indexOf.call(deleteBtns, deleteBtn);
  removeTask(deleteBtnIndex);
}

function createTask(item) {
  const taskElement = document.createElement("div");
  const task = document.createElement("input");
  task.setAttribute("value", item.taskTitle);
  taskElement.appendChild(task);
  taskElement.appendChild(createDeleteBtn());
  taskElement.classList.toggle("task");
  tasksContainer.appendChild(taskElement);
  task.select();
}
