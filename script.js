let todos = [];          //empty state variable to hold the list of todos

function addTodo() {          //updates the state variable and calls render to reflect changes in the DOM
  todos.push({
    title: document.querySelector("input").value,
  });
  render();
}
 
function deleteFirstTodo() {         //updates the state variable and calls render to reflect changes in the DOM
  todos.splice(0, 1);
  render();
}

function deleteLastTodo() {         //updates the state variable and calls render to reflect changes in the DOM
  todos.splice(todos.length - 1, 1);
  render();
}

function deleteTodoAt(index) {      //deletes a todo at a particular index and calls render to reflect changes in the DOM
  todos.splice(index, 1);
  render();
}

function createTodoComponent(todo, index) {          //creates a todo component and returns it
  const spanEle = document.createElement("span");      
  const buttonEle = document.createElement("button");
  buttonEle.innerHTML = "Delete";
  buttonEle.setAttribute("onclick", "deleteTodoAt(" + index + ")");   //delete functionality for each todo component //set attribute method to set onclick attribute of button to call deleteTodoAt function with the index of the todo to be deleted, means ur onclick = "deleteTodoAt(0)" for first todo , "deleteTodoAt(1)" for second todo and so on
  spanEle.innerHTML = todo.title;

  const divEle = document.createElement("div");
  divEle.appendChild(spanEle);
  divEle.appendChild(buttonEle);

  return divEle;                                 //returns the created todo component
}


//reacts as a framework,Renders the todos array to the DOM
function render() {
  document.querySelector("#todos").innerHTML = "";

  for (let i = 0; i < todos.length; i++) {                 //iterates through the todos array and creates todo components
    const element = createTodoComponent(todos[i], i); //creates a todo component for each todo in the todos array ,passing the index for delete functionality

    document.querySelector("#todos").appendChild(element);        //appends each created component to the DOM
  }
}