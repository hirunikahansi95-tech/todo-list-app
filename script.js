let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();


function addTask() {

    let input = document.getElementById("taskInput");

    let task = input.value;


    if(task === ""){
        alert("Please enter a task");
        return;
    }


    tasks.push(task);

    saveTasks();

    displayTasks();

    input.value = "";

}



function displayTasks(){

    let list = document.getElementById("taskList");

    list.innerHTML = "";


    tasks.forEach(function(task){

        let li = document.createElement("li");

        li.textContent = task;


        let deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";


        deleteButton.onclick = function(){

            tasks = tasks.filter(item => item !== task);

            saveTasks();

            displayTasks();

        };


        li.appendChild(deleteButton);


        list.appendChild(li);


    });


}



function saveTasks(){

    localStorage.setItem("tasks", JSON.stringify(tasks));

}