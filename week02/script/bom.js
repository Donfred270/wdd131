const input = document.querySelector("favchap")
const button = document.querySelector("submit")
const list = document.querySelector("list")
const li = document.createElement("li")
const deleteButton = document.createElement("button")
li.textContent = input.value;
deleteButton.textContent = "Delete"
li.append(deleteButton)
list.append(li)