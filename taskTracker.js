const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "tasks.json");

function loadTasks() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
  }

  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

function saveTasks(tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

function getNextId(tasks) {
  return tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
}

function addTask(desc) {
  const tasks = loadTasks();
  const id = getNextId(tasks);
  const now = new Date().toISOString();
  tasks.push({
    id,
    description: desc,
    status: "todo",
    createdAt: now,
    updatedAt: now,
  });
  saveTasks(tasks);
  console.log(`Task added successfully (ID: ${id})`);
}

function updateTask(id, desc) {
  const tasks = loadTasks();
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    console.log("Task not found");
  }
  task.description = desc;
  task.updatedAt = new Date().toISOString();

  saveTasks(tasks);
  console.log(`Task updated successfully`);
}

function deleteTask(id) {
  let tasks = loadTasks();
  const initialLength = tasks.length;
  tasks = tasks.filter((t) => t.id != id);
  if (initialLength === tasks.length) {
    console.log("Task not found");
  }
  saveTasks(tasks);
  console.log("Task was deleted");
}

function markAsDone(id) {
  let tasks = loadTasks();
  let task = tasks.find((task) => (task.id = id));
  task.status = "done";
  updatedAt = new Date().toISOString();
  saveTasks(tasks);
  console.log("Task marked as done");
}
function markInProgress(id) {
  let tasks = loadTasks();
  let task = tasks.find((task) => (task.id = id));
  task.status = "progress";
  updatedAt = new Date().toISOString();
  saveTasks(tasks);
  console.log("Task marked as in progress");
}

function listAllTasks() {
  loadTasks();
}

function listDoneTasks() {
  let tasks = loadTasks();
  let doneTasks = tasks.filter((task) => task.status == "done");

  doneTasks.forEach((t) =>
    console.log(`${t.id}, ${t.description}, ${t.status}`)
  );
}
function listInProgressTasks() {
  let tasks = loadTasks();
  let progressTasks = tasks.filter((task) => task.status == "todo");

  progressTasks.forEach((t) =>
    console.log(`${t.id}, ${t.description}, ${t.status}`)
  );
}

const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case "add":
    addTask(args[1]);
    break;
  case "update":
    updateTask(parseInt(args[1]), args[2]);
    break;
  case "delete":
    deleteTask(parseInt(args[1]));
    break;
  case "mark-in-progress":
    markInProgress(parseInt(args[1]));
    break;
  case "mark-done":
    markAsDone(parseInt(args[1]));
    break;
  case "list":
    listAllTasks(args[1] || null);
    break;
  case "list":
    listDoneTasks(args[1] || null);
    break;
  case "list":
    listInProgressTasks(args[1] || null);
    break;
  default:
    console.log(`
Usage:
  node task-cli.js add "Task description"
  node task-cli.js update <id> "New description"
  node task-cli.js delete <id>
  node task-cli.js mark-in-progress <id>
  node task-cli.js mark-done <id>
  node task-cli.js list
  node task-cli.js list done|todo|in-progress
    `);
}
