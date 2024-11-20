import { useState, useEffect } from "react";

function Todo() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todos, setTodos] = useState([]);
  const [flag, setFlag] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const isFormValid = title !== "" && content !== "";

  // Get요청
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:3000/todo", {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });
        if (!response.ok) throw new Error("Failed to fetch todos");
        const data = await response.json();
        setTodos(data[0]);
        console.log(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchTodos();
  }, [flag]);

  // Todo 생성 함수 (POST요청)
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isFormValid) return;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    };

    try {
      const response = await fetch(
        "http://localhost:3000/todo",
        requestOptions
      );
      if (!response.ok) throw new Error("Something went wrong");

      const result = await response.json();
      console.log("Todo Created:", result);
      setTitle("");
      setContent("");
      setFlag(!flag);
    } catch (error) {
      console.error("Failed to create todo", error);
    }
  };

  // Todo 수정 함수 (PATCH요청)
  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditTitle(todo.title);
    setEditContent(todo.content);
  };

  const handleEdit = async () => {
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: editTitle, content: editContent }),
    };

    try {
      const response = await fetch(
        `http://localhost:3000/todo/${editingId}`,
        requestOptions
      );
      if (!response.ok) throw new Error("Failed to update todo");
      setEditingId(null);
      setFlag(!flag);
    } catch (error) {
      console.error("Failed to update todo", error);
    }
  };

  // Todo 삭제 함수
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/todo/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete todo");

      setFlag(!flag);
    } catch (error) {
      console.error("Failed to delete todo", error);
    }
  };

  return (
    <div>
      <h1>UMC 투두리스트</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" disabled={!isFormValid}>
          Todo 생성
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editingId === todo.id ? (
              <>
                <input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <input
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                />
                <button onClick={handleEdit}>수정 완료</button>
              </>
            ) : (
              <>
                <h3>{todo.title}</h3>
                <p>{todo.content}</p>
                <button onClick={() => startEdit(todo)}>수정</button>
                <button onClick={() => handleDelete(todo.id)}>삭제</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
