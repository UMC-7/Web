// 1. Enter 입력했을 때 addTodo 실행
const todoInput = document.getElementById("input");
todoInput.addEventListener("keypress", (e)  => {
    if(e.key==="Enter") {
        e.preventDefault();
        addTodo();
    }
})

// 2. addTodo
function addTodo(){
    var input = document.getElementById("input");
    var newTodo = input.value.trim();

    if(newTodo !== "") {
        var listItem = document.createElement("li");
        listItem.textContent = newTodo;
        // innerText 는 사용자에게 보여지는 텍스트만 가져옴
        // textContent는 숨겨진 텍스트까지 포함해서 텍스트값을 모두 다 가져옴

        // *입력한 투두 해야 할 일에 추가하기
        var todoTask = document.getElementById("todoTask");
        todoTask.appendChild(listItem);
        input.value = '';
        // appendChild() 부모노드에 자식노드 추가
        // append() 부모노드에 자식노드를 추가할 수 있을 뿐만 아니라, text도 추가 가능

        // *완료 버튼 만들기
        var completeButton = document.createElement("button");
        completeButton.textContent = "완료";
        listItem.appendChild(completeButton);

        // *완료 버튼을 눌렀을 때
        completeButton.addEventListener("click", function() {
            var completeTask = document.getElementById("todoComplete");
            completeTask.appendChild(listItem);
            completeButton.remove();

            listItem.appendChild(deleteButton);
        })

        // *삭제 버튼 만들기
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "삭제";
        
        // *삭제 버튼을 눌렀을 때
        deleteButton.addEventListener("click", function() {
            listItem.remove();
        })
    }
    
}
