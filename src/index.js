document.addEventListener("DOMContentLoaded", () => {
  // your code here

  //form and relevant input fields
  const newTaskForm = document.querySelector("#create-task-form");
  const newTaskDescription = document.querySelector("#new-task-description");
  // const newTaskPriority = document.querySelector('#new-task-priority');
  
  //ul where new tasks will live on the DOM
  const newTaskUl = document.querySelector('#tasks');


  newTaskForm.addEventListener("submit", createNewTask);
  
});


  const createNewTask = event => {
    event.preventDefault();
    //stop form from trying to submit
    const newTaskDescription = document.querySelector("#new-task-description");
    const newTask = document.createElement("li");

    newTask.innerText = newTaskDescription.value; 
    appendNewTask(newTask);
    event.target.reset();

  };

  const appendNewTask = task => {
    document.querySelector("#tasks").appendChild(task);
  };



