const button = document.querySelector("button");
const listContainer = document.querySelector(".list-container");
const inputBox = document.querySelector("input");

function addTask(){
     if(inputBox.value === ""){
        alert(`please add a task`);
     }else{
             let li = document.createElement("li");
             li.innerHTML = inputBox.value;
             listContainer.appendChild(li);
             let span = document.createElement("span");
             span.innerHTML = "\u00d7";
             li.appendChild(span);
     }

}


listContainer.addEventListener("click" , (e) =>{
     if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
     }
     else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
     }
},false);
 

