document.getElementById("input").addEventListener("keypress",function(e){
  if(e.key==="Enter"){
    e.preventDefault();
    addTask();
  }
})

function addTask(){
  var input=document.getElementById("input");
  var newTask=input.value.trim();

  if(newTask!==""){
    var listItem=document.createElement("li");
    listItem.textContent=newTask;


    var completeButton=document.createElement("button");
    completeButton.textContent="완료";
    listItem.appendChild(completeButton);

    var todoTask=document.getElementById("todoTask");
    todoTask.appendChild(listItem);

    //완료 버튼을 눌렀을때
    completeButton.addEventListener("click",function(){
      var completeTask=document.getElementById("completeTask");
      completeTask.appendChild(listItem);
      completeButton.remove();

      listItem.appendChild(deleteButton);
    });


    var deleteButton=document.createElement("button");
    deleteButton.textContent="삭제";

    //삭제 버튼 눌렀을 때
    deleteButton.addEventListener("click",function(){
      listItem.remove();
    })
    
  }
}