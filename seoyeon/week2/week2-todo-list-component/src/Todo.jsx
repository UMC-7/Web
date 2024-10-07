import './App.css'

const Todo=(props)=>{

    const {id,task,isEditing,editText,setEditText,deleteTodo,updateTodo,setEditingId}=props

    return(
        <>
        <div className='todo-item' >
            <div >
                {isEditing && 
                    <input defaultValue={task} onChange={(e)=>{
                    setEditText(e.target.value)}}/>}
                {!isEditing && 
                    <p key={id} style={{marginTop:'2px'}}>{task}</p>}
            </div>
            <div>
            <button className='item-button' onClick={()=>{deleteTodo(id);}}>삭제하기</button>
            {isEditing && 
                <button className='item-button' onClick={()=>{updateTodo(id,editText)}}>수정완료</button>}
            {!isEditing && 
                <button className='item-button' onClick={()=>{ console.log(task); setEditingId(id)}}>수정하기</button>}
            </div>
        </div>
        </>
        
    )
}
export default Todo;