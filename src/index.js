import "./styles/style.css";
import "./styles/modern-normalize.css";
import {
  renderTasks,
  addTask,
  deleteTask,
  saveTask,
  swapBtns,
  selectLatestTaskTitle,
} from "./barrel";

renderTasks();

const tasksContainer = document.querySelector(".tasks");
const addBtn = document.querySelector(".add-task");

// Add tasks
addBtn.addEventListener("click", addTask.bind(null, "New Task"));
addBtn.addEventListener("click", renderTasks);
addBtn.addEventListener("click", selectLatestTaskTitle);

//Delete tasks
tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    deleteTask(event.target);
    renderTasks();
  }
});

//Rename tasks
tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("done-btn")) {
    const task = event.target.closest(".task");
    const taskTitle = task.querySelector(".task-title");
    saveTask(event.target, taskTitle.value);
  }
});

//Disable/enable input
tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("done-btn")) {
    const task = event.target.closest(".task");
    const taskTitle = task.querySelector(".task-title");
    taskTitle.disabled = true;
  }
  if (event.target.classList.contains("edit-btn")) {
    const task = event.target.closest(".task");
    const taskTitle = task.querySelector(".task-title");
    taskTitle.disabled = false;
  }
});

//Swap done and edit buttons
tasksContainer.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("done-btn") ||
    event.target.classList.contains("edit-btn")
  ) {
    swapBtns(event.target);
  }
});
