const listItems = document.querySelector(".todo-tasks");
const newItem = document.querySelector(".input-header input");
const filterItems = document.querySelector(".filter-buttons");

let temp;
newItem.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (temp) {
      e.preventDefault();
      temp.innerHTML = newItem.value;
      temp = "";
      newItem.value = "";
      return;
    }
    var listElements = document.createElement("li");
    var textBox = document.createElement("div");
    var checkBox = document.createElement("input");
    var actionBox = document.createElement("span");
    textBox.appendChild(document.createTextNode(newItem.value));
    actionBox.appendChild(document.createTextNode("..."));
    actionBox.style.cursor = "pointer";
    var newElement = document.createElement("ul");
    var DeleteTag = document.createElement("li");
    DeleteTag.className = "menu";
    const DeleteText = document.createTextNode("Delete");
    DeleteTag.appendChild(DeleteText);
    newElement.appendChild(DeleteTag);
    var EditTag = document.createElement("li");
    EditTag.className = "menu";
    const EditText = document.createTextNode("Edit");
    EditTag.appendChild(EditText);
    newElement.appendChild(EditTag);
    newElement.className = "actions lists";

    filterItems.addEventListener("click", (e) => {
      const todos = document.querySelectorAll(".todo-tasks");
      todos.forEach(() => {
        switch (e.target.innerHTML) {
          case "All":
            listElements.style.display = "flex";
            break;

          case "Completed":
            if (textBox.style.textDecoration !== "line-through") {
              listElements.style.display = "none";
            } else {
              listElements.style.display = "flex";
            }
            break;
          case "Pending":
            if (textBox.style.textDecoration === "line-through") {
              listElements.style.display = "none";
            } else {
              listElements.style.display = "flex";
            }
            break;
        }
      });
    });

    checkBox.addEventListener("change", (e) => {
      if (e.target.checked) {
        textBox.style.textDecoration = "line-through";
      } else {
        textBox.style.textDecoration = "none";
      }
    });

    actionBox.addEventListener("click", function () {
      newElement.style.display = "block";
    });

    newElement.addEventListener("click", function () {
      newElement.style.display = "none";
    });

    DeleteTag.addEventListener("click", () => {
      listItems.removeChild(listElements);
    });

    EditTag.addEventListener("click", () => {
      temp = textBox;
      newItem.value = temp.innerHTML;
    });

    checkBox.setAttribute("type", "checkbox");
    listElements.className = "todo-task";

    listElements.appendChild(newElement);
    listElements.appendChild(checkBox);
    listElements.appendChild(textBox);
    listElements.appendChild(actionBox);

    listItems.appendChild(listElements);
    newItem.value = "";

    var actions = document.querySelector(".actions");
    actions.style.display = "none";
  }
});

function deleteAll() {
  var e = document.querySelector(".todo-tasks");
  e.innerHTML = "";
}
var btn = (document.getElementById("btn").onclick = function () {
  deleteAll();
});
