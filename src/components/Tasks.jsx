import React from 'react'

function Tasks({todo,index,deleteToDo}) {
  return (
   
    <div className="task-list">
        <p>{todo}</p>
        <div className="actions">
          <input type="checkbox" />
          <button onClick={()=>{deleteToDo(index)}}>Delete</button>
        </div>
      </div>
      
  )
}

export default Tasks