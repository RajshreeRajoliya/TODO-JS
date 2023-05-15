const taskBtn = document.getElementById("add");
taskBtn.addEventListener("click", addTask);

const textValue = document.getElementById("inputBox");

var arr = JSON.parse(localStorage.getItem("todos")) || [];
let editID = null;
function addTask() {
  if (editID != null) {
    arr.splice(editID, 1 , {task : textValue.value});
  } else {
    arr.push({ task: textValue.value });
    
  }
  
  localStorage.setItem("todos", JSON.stringify(arr));
  textValue.value = "";
  displayData(arr);
  document.getElementById("add").innerText = "ADD TASK";
}

displayData(arr);
function displayData(data) {
  document.getElementById("TodoTask").innerHTML = "";
  data.map((el, index) => {
    var tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerText = el.task;

    let btn1 = document.createElement("button");
    btn1.innerText = "Edit";
    btn1.addEventListener("click", () => {
      editTask(index);
    });
    btn1.setAttribute("id","editid1");

   let btn2 = document.createElement("button");
    btn2.innerText = "Delete";
    btn2.addEventListener("click", (index) => {
      deleteTask(index);
    });
    btn2.setAttribute("id","deleteid2");
    

    tr.append(td, btn1, btn2);
    document.querySelector("#TodoTask").append(tr);
  });
}

function deleteTask(index) {
  arr.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(arr));
  displayData(arr);
}

function editTask(index) {
  editID = index;
  textValue.value = arr[editID].task;
  document.getElementById("add").innerText = "UPDATE";
}
