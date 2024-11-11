import { createContext } from "react";
import { useState, useRef } from "react";

//데이터를 담고 있음.
export const TodoContext = createContext();

//value에 접근을 허락해주는 우산을 만듦.
export function TodoContextProvider({children}) {

    const [todos, setTodos] = useState([{id: 1, task: '투두 만들어보기'}]);
    const nextID = useRef(1);

    const [text, setText] = useState('');

    const [editingId, setIsEditingId] = useState(''); // 수정하기를 누른 상태인지
    const [editText, setEditText] = useState(''); // 수정할 텍스트

    // 1. 추가하기
    const addTodo = () => {
        
        if (text.trim().length === 0) {
        alert('투두를 입력해주세요.');
        }
        else {
        setTodos((prev) => [...prev, {id: nextID.current, task: text}]);
        setText('');
        nextID.current += 1;
        }
    };

    // 2. 삭제하기
    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((item) => item.id !== id));
    }; // item(현재 투두들)의 id와 온클릭으로 받은 id값의 일치 확인 후 filter 활용

    // 3. 수정하기 (핵심)
    const updateTodo = (id, text) => {
        if (editText.trim().length === 0) {
        alert('수정할 내용을 입력해주세요.')
        }
        else {
        setTodos((prev) => 
            prev.map((item) => item.id === id ? {...item, task: text} : item)
        ); // item id와 온클릭 id가 일치하면 text 수정 : 아니면 item 그대로
        }
        setIsEditingId(''); // editingID 상태 초기화 -> input창 아니고 p로 돌아감
    };

    // 렌더링 방지 함수
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return <TodoContext.Provider value={{
        todos, setTodos, text, setText, editingId, setIsEditingId, editText, setEditText, handleSubmit, addTodo, deleteTodo, updateTodo, 
    }}>{children}</TodoContext.Provider>
}