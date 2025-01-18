function saveTask() {
    console.log("Saving task");

    // Get values from the form 
    let title = document.getElementById("txtTitle").value;
    let description = document.getElementById("txtDescription").value;
    let color = document.getElementById("selColor").value;
    let startDate = document.getElementById("selDate").value;
    let status = document.getElementById("selStatus").value;
    let budget = document.getElementById("numBudget").value;

    // Build an object with the task data
    let task = {
        title: title,
        description: description,
        color: color,
        startDate: startDate,
        status: status,
        budget: budget
    };

    console.log("Task object:", task);

    // Display the task on the screen
    displayTask(task);
}

function displayTask(task) {
    let listSection = document.getElementById("list");

    let taskElement = document.createElement("div");
    taskElement.classList.add("task");
    
    taskElement.style.backgroundColor = task.color;
    
    // Display task information inside the div
    taskElement.innerHTML = `
        <h4>${task.title}</h4>
        <p>${task.description}</p>
        <p>Start Date: ${task.startDate}</p>
        <p>Status: ${task.status}</p>
        <p>Budget: $${task.budget}</p>
    `;
    
    // Append the task to the list section
    listSection.appendChild(taskElement);
}

function init() {
    console.log('init');
    // Hook events
    $("#btnSave").click(saveTask);
}

window.onload = init; // Wait until HTML and CSS gets resolved to run JS