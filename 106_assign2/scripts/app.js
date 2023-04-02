var isImportant = false;


function togglePanel(){
    console.log("button clicked");
    //hide the section/element
    $("#form").slideToggle('slow');
    //$("#form").hide();
}

function saveTask(){
    console.log("Save Clicked");

    const title=$("#txtTitle").val();
    const desc=$("#txtDescription").val();
    const dueDate=$("#txtDueDate").val();
    const duration=$("#txtDuration").val();
    const status=$("#selStatus").val();
    const color=$("#selColor").val();

    let task = new Task(title, isImportant, desc, dueDate, duration, status, color);

    console.log(task);

    displayTask(task);
    clearForm();
  

}

function displayTask(task){
    let syntax = `<div class="task" style="border:1px solid ${task.color};"> 
    <div class="info">
        <h5>${task.title}</h5>
        <p>${task.description}</p>
        </div>

        <label>${task.status}</label>

        <div class="dates">
        <label> ${task.dueDate}</label>
        <label> ${task.duration}</label>
        </div>;

    </div>`;

    $("#pendingTasks").append(syntax);


}

function toggleImportant(){
    const nonImpClasses="fa-regular fa-bookmark not-important";
    const impClasses="fa-solid fa-bookmark important";

    if(isImportant){
        $("#iImportant").removeClass(impClasses).addClass(nonImpClasses);
        isImportant=false;
    }
    else{
        $("#iImportant").removeClass(nonImpClasses).addClass(impClasses);
        isImportant=true;

    }

}


function init(){
    console.log("Task Manager")

    // retrieve data

    //hook events
    $("#btnShowPanel").click(togglePanel);
    $("#btnSave").click(saveTask);
    $("#iImportant").click(toggleImportant);
}

window.onload = init;

/**
 * Inv. HW
 * http methods/verbs
 * http status codes
 * 
 * challenges
 */