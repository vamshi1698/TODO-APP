const submit = document.getElementById("add-button");
const input = document.getElementById("input");
const ul = document.getElementById("ul");
submit.addEventListener("click",()=>{
    if(input.value !== ""){
        let li = document.createElement("li");
        li.innerText = input.value;
        li.innerHTML += '<i class="fa-regular fa-circle-xmark"></i>';
        ul.appendChild(li);
    }
    saveData();
    input.value = "";
}) 
ul.addEventListener("click",(e)=>{
    if(e.target.tagName ==="I"){
       let parent = e.target.parentElement;
       parent.remove();
        saveData();
    }
    if(e.target.tagName ==="LI"){
        input.value = e.target.innerText;
        input.focus();
        e.target.remove();
    } 
    }
)
function saveData(){
    localStorage.setItem("listItems",ul.innerHTML);
}
(function getData(){
   ul.innerHTML =  localStorage.getItem("listItems");
})();