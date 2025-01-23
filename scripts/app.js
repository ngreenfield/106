function saveTask() {
    console.log("Saving task");

    // Get values from the form 
    const title = $("#txtTitle").val();
    const description = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();
    
    console.log(title, description, color, date, status, budget);

    // Build an object with the task data
    let taskToSave = new Task (title, description, color, date, status, budget);
    console.log(taskToSave);

    //save to server
    $.ajax({
        type: "POST",
        url: "http://fsdiapi.azurewebsites.net/api/tasks/",
        data: JSON.stringify(taskToSave),
        contentType: "application/json",
        success: function(response){
            console.log(response);
        },
        error: function(error){
            console.log(error);
        }
    })

    // Display the task on the screen
    displayTask(taskToSave);
}

function loadTask(){
    $.ajax({
        type: "GET", 
        url: "http://fsdiapi.azurewebsites.net/api/tasks",
        success: function(response){
            console.log(response);
            let data = JSON.parse(response);
            console.log(data);
            //console.log only those elements that werre created by you on the server
            for(let i=0;i<data.length;i++){
                let task = data[i];
                if(task.name==="nickg"){
                    displayTask(task)
                    console.log(task);
                }
            }
        },  
        error: function(error){
            console.log(error);
        }
    });
}

function displayTask(task) {
    let syntax = `<div class='task' style='background-color: ${task.color};'>
    <div class='info'>
        <h5>${task.title}</h5>
        <p>${task.description}</p>
    </div>

    <label class = 'status'> Status: ${task.status}</label>

    <div class = 'date-budget'>
    <label>Start Date: ${task.date}</label>
    <label>Budget: $${task.budget}</label>
    </div>
    </div>`
    $(".pending-tasks").append(syntax);
}

function testFunction(){
    $.ajax({
        type:"get",
        url:"https://fsdiapi.azurewebsites.net/api/tasks/",
        success: function(response){
            console.log(response);
        },
        error: function(error){
            console.log(error);
        }
    });
}

function init() {
    console.log('init');
    //load data
    loadTask();
    // Hook events
    $("#btnSave").click(saveTask);
}

window.onload = init; // Wait until HTML and CSS gets resolved to run JS