let btn = document.querySelector("#btn");
let input = document.querySelector("#input");
let ul = document.querySelector("#ul");

btn.addEventListener("click", () => {
  document.createElement("input");
  let list = document.createElement("li");
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  let text = document.createElement('span');
  text.innerHTML = input.value
  let deleteBtn = document.createElement("button");
  let editeBtn = document.createElement("button");
  deleteBtn.innerHTML = "✕";
  editeBtn.innerHTML = "✏️";
  list.appendChild(checkBox);
  list.appendChild(text);
  list.appendChild(deleteBtn);
  list.appendChild(editeBtn);

  ul.appendChild(list);
  
checkBox.addEventListener("change", () => {
  if (checkBox.checked) {
    text.style.textDecoration = "line-through";
  } else {
    text.style.textDecoration = "none";
  }
});
deleteBtn.addEventListener('click',()=>{
list.remove()
})
editeBtn.addEventListener('click',()=>{
 let newText =    input.value = text.innerText
text.innerHTML = newText
let replaceBtn = document.createElement('button')
replaceBtn.id = "replace"
replaceBtn.innerHTML = "replace"
btn.replaceWith(replaceBtn)
replaceBtn.addEventListener('click',()=>{
    text.innerHTML =  input.value;
    replaceBtn.replaceWith(btn)
})

})


});
