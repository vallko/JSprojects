const inputTask = document.createElement("input");
inputTask.id = "taskField";
inputTask.setAttribute("type", "TEXT");
const inputPriority = document.createElement("INPUT");
inputPriority.setAttribute("type", "TEXT");
inputTask.id = "priorityField";

var table = document.getElementById("table1").getElementsByTagName("tbody");
var newRow = table1.insertRow();
newRow.appendChild(inputTask);
newRow.appendChild(inputPriority);
let taskDB = [];
let mappedArray = [];
let taskCounter = 1;
let i = 1;
var save1 = () => {
  var newRow = table1.insertRow();
  for (; i <= taskCounter; i++) {
    readTask = inputTask.value;
    readPriority = inputPriority.value;
    taskManager = {
      task: readTask,
      priority: readPriority,
    };
    taskDB.push(taskManager);
    localStorage["taskDB"] = JSON.stringify(taskDB);
    localStorage["mappedArray"] = JSON.stringify(mappedArray);
    mappedArray = taskDB.map((individualTask) => {
      let mappedTasks = {};
      mappedTasks.task = individualTask.task;
      mappedTasks.priority = individualTask.priority;
      newRow.innerHTML = `<td>${i}</td> <td>${taskManager.task}</td><td>${taskManager.priority}</td>`;
      return mappedTasks;
    });
  }
  taskCounter++;

  console.log(JSON.stringify(mappedArray));
  inputTask.value = "";
  inputPriority.value = "";
};
