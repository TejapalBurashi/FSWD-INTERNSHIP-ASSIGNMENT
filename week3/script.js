let taskList = document.getElementById("taskList");

window.onload = function(){
    loadTasks();
};

function addTask(){

    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if(taskText === ""){
        alert("Enter a task");
        return;
    }

    createTask(taskText);

    saveTasks();

    input.value="";
}

function createTask(text){

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = text;

    span.onclick = function(){
        span.classList.toggle("completed");
        saveTasks();
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.onclick = function(){
        li.remove();
        saveTasks();
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
}

function saveTasks(){

    let tasks = [];
    document.querySelectorAll("#taskList li span").forEach(task=>{
        tasks.push({
            text: task.innerText,
            completed: task.classList.contains("completed")
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(){

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task=>{
        createTask(task.text);
        let lastTask = taskList.lastChild.querySelector("span");

        if(task.completed){
            lastTask.classList.add("completed");
        }
    });
}