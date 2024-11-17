import { useContext, useState } from 'react'
import React from 'react'
import './App.css'
import { TodoContext } from './context/TodoContext'
import Todo from './Todo'

const TodoList=()=>{
    const {        
        todos,
        editingId,
        setEditingId,
        editText,
        setEditText,
        deleteTodo,
        updateTodo,
        } = useContext(TodoContext)
        
    const fixEditText=(text)=>{
        setEditText(text)
    }
    const fixEditingId=(id)=>{
        setEditingId(id)
    }

    return(
        <div className='todo-list'>
            {todos.map((todo,_)=>
            <Todo id={todo.id} task={todo.task} isEditing={todo.id===editingId} />
            )}
        </div>
    )
}
export default TodoList;