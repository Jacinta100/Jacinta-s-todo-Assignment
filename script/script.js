// selectors
const formInput = document.querySelector('.todo-input');
const formButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


// Event Listeners
formButton.addEventListener('click' , addTodo);
todoList.addEventListener('click',deleteCheck);

//1. Funtions (To target the form and add todo )
function addTodo(event){
    // this will prevent the form from reloading
    event.preventDefault();
    //  Create  Todo div initiated in html hold the check and delete
    const  ultodoDiv = document.createElement('div');
    ultodoDiv.classList.add('todo');

    // create li and append to ultodoDiv
    const newTodo = document.createElement('li');
    newTodo.innerText = formInput.value;
    newTodo.classList.add('todo-item');
    ultodoDiv.appendChild(newTodo);

    // Tasks check button  
    const completedButton = document.createElement('button');
    completedButton.innerHTML= '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    ultodoDiv.appendChild(completedButton);
       
    // Tasks delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML= '<i class="fas fa-trash"></i>'
    deleteButton.classList.add("delete-btn");
    ultodoDiv.appendChild(deleteButton);

    // Append to list
    todoList.appendChild(ultodoDiv);
    // clear forminput value
    formInput.value="";
}
//2. Funtions (To target the the check and delete button to  mark or clear to do)
 
function deleteCheck(e){
 const item = e.target;
//  Delete todo
if(item.classList[0] === "delete-btn"){
  const todo = item.parentElement;
  todo.remove();
}

// Check Mark
if (item.classList[0]==="complete-btn" ){
const todo =item.parentElement;
todo.classList.toggle("completed");
}
}