const todoForm =document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "todos";

function deleteToDo(event){
    const li = event.target.parentElement;    
    li.remove();    
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}


function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click" ,deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);

}

function saveToDos(){
    localStorage.setItem(TODOS_KEY , JSON.stringify(toDos));
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    };

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();

}

todoForm.addEventListener("submit" , handleToDoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY);

// localStorage에 데이터 있는지 확인
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}