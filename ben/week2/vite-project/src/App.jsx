import React, {useState} from "react";

function App() {
  // 상태 관리: 할 일 목록 및 새로운 할 일의 내용
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [editText, setEditText] = useState("");
  
  // 추가
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id}])
    }
  }

  // 수정
  // 삭제
}