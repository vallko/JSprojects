const inputTask = document.createElement('input')
inputTask.id = "taskField"
inputTask.setAttribute('type', 'TEXT')
const inputPriority = document.createElement("INPUT")
inputPriority.setAttribute('type', 'TEXT')
inputTask.id = "priorityField"

var table = document.getElementById("table1").getElementsByTagName('tbody')[0]
var newRow = table1.insertRow()
newRow.appendChild(inputTask);
newRow.appendChild(inputPriority)
myTaskStorage = window.localStorage
let taskDB = [];
let taskCounter = 1
var save1 = () => {
    for(let i = 0; i < taskCounter; i++){
        var newRow = table1.insertRow()
        readTask = inputTask.value
        readPriority = inputPriority.value
        taskManager = { 
            task: readTask , 
            priority: readPriority }
        taskDB.push(taskManager);
        newRow.innerHTML = `${taskManager.task}  ${taskManager.priority}`
    
      }
console.log(taskDB);
}