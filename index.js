const taskBtn = document.getElementById("add");
taskBtn.addEventListener("click", addTask);

const textValue = document.getElementById("inputBox");

var arr = JSON.parse(localStorage.getItem("todos")) || [];

function addTask(){

arr.push({task : textValue.value});
localStorage.setItem("todos" , JSON.stringify(arr));

displayData(arr)
}

function displayData(data){
    document.getElementById("TodoTask").innerHTML = "";
    data.map((el) => {
        var tr = document.createElement("tr");
        let td = document.createElement("td");
        td.innerText = el.task;

       var btn1 = document.createElement("button");
       btn1.innerText = "Edit";

       var btn2 = document.createElement("button");
       btn2.innerText = "Delete";
       btn2.addEventListener("click" , (index)=>{deleteTask(index)})
       
       tr.append(td , btn1 , btn2);
       document.querySelector("#TodoTask").append(tr);
    })
}

function deleteTask(index){
arr.splice(index,1);
localStorage.setItem("todos" , JSON.stringify(arr));
displayData(arr);
}



displayData(arr)