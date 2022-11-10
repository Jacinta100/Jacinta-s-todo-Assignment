// selectors
const formInput = document.querySelector('.todo-input');
const formButton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');


// Event Listeners
formButton.addEventListener('click' , addTodo);


// Funtions
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
    todolist.appendChild(ultodoDiv);
    // clear forminput value
    formInput.value="";
}