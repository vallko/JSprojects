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
let taskDB = [];
let taskCounter = 2
let i = 1;

var save1 = () => {
    var newRow = table1.insertRow()
    for( ; i < taskCounter; i++){
        readTask = inputTask.value
        readPriority = inputPriority.value
        taskManager = { 
            task: readTask , 
            priority: readPriority}
        taskDB.push(taskManager);
        newRow.innerHTML = `${i} ${taskManager.task}  ${taskManager.priority}`
        localStorage["taskDB"] = JSON.stringify(taskDB)
        taskDB.push(JSON.parse(localStorage.getItem('session')));
      }
      taskCounter++
      
console.log(JSON.stringify(taskDB))
}
