const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newToDoInput = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHTML = `<span class="text">${newToDoInput}</span>
          <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
          </div>`;
  newLi.innerHTML = newLiInnerHTML;
  todoList.append(newLi);
  todoInput.value = "";
});

todoList.addEventListener("click", (e) => {
  // done  and delete button
  const target = e.target.classList.contains("done");

  if (target == true) {
    console.log("great");
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
  } else {
    console.log("Deleted");
    const liSpan = e.target.parentNode.parentNode;
    liSpan.remove();
  }
});
