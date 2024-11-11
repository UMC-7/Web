import { useContext } from 'react';
import './App.css'
import Button from './components/Button';
import Input from './components/Input';
import { TodoContext } from './context/TodoContext.jsx';

function App() {
  const {
    todos, 
    text, 
    setText, 
    editingId, 
    setIsEditingId, 
    editText, 
    setEditText, 
    handleSubmit, 
    addTodo, 
    deleteTodo, 
    updateTodo,
  } = useContext(TodoContext);

  return (
    <>
      <h2 className='title'> Rael's TodoList!</h2>

      <form className='input_container' onSubmit={handleSubmit}>
        <Input classname='input' type='text' value={text} onchange={(e) => setText(e.target.value)}/>
        <Button classname="button" onclick={addTodo} text="할 일 등록"/>
      </form>

      <div className='container'>
        {todos.map((todo, _) => (
          <div className='todolist' key={todo.id} style={{display: 'flex', gap: '20px'}}>

            {/* 수정이 아닐때 */}
            {editingId !== todo.id && (
              <div className='listitem' style={{display: 'flex', gap: '10px'}}>
                <p className='list'>{todo.id}.</p>
                <p className='list'>{todo.task}</p>
              </div> 
            )}

            {/* 수정 중일때 */}
            {editingId === todo.id && (
              <div className='listitem' style={{display: 'flex', gap: '10px'}}>
                <p className='list'>{todo.id}.</p>
                <Input 
                classname='input'
                dvalue={todo.task} 
                onchange={(e) => setEditText(e.target.value)}
                />
              </div> 
            )}
            <Button classname="deletebutton" onclick={() => {deleteTodo(todo.id)}} text="삭제하기" />


            {/* editingId !== todo.id 수정이 아닌 상태 */}
            {/* editingId === todo.id 수정 중인 상태 */}
            {editingId === todo.id ? (
              <Button classname="editbutton" onclick={() => {updateTodo(editingId, editText)}} text="수정완료" />
            ) : (
              <Button classname="editbutton" onclick={() => {setIsEditingId(todo.id)}} text="수정진행" />
            )}

            
          </div>
        ))}
      </div>
    </>
  )
}

export default App;