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
    var newTodo = document.getElementById("input").value;

    document.getElementById("todoTask").innerText = newTodo;
    d
}
