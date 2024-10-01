document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const todoList = document.getElementById('todo-list');
    const doneList = document.getElementById('done-list');

    // 할 일 추가
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                addTask(taskText);
                taskInput.value = ''; // 입력 필드 초기화
            }
        }
    });

    // 할 일 목록에 새로운 할 일 추가
    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;    

        const completeButton = document.createElement('button');
        completeButton.textContent = '완료';
        completeButton.addEventListener('click', () => moveToDone(taskItem));

        taskItem.appendChild(completeButton);
        todoList.appendChild(taskItem);
    }

    // 할 일을 해낸 일로 이동
    function moveToDone(taskItem) {
        const doneItem = taskItem.cloneNode(true);
        doneItem.querySelector('button').textContent = '삭제';
        doneItem.querySelector('button').classList.add('delete');
        doneItem.querySelector('button').addEventListener('click', () => deleteTask(doneItem));

        doneList.appendChild(doneItem);
        taskItem.remove();
    }

    // 해낸 일 삭제
    function deleteTask(taskItem) {
        taskItem.remove();
    }
});
