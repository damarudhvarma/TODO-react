import React from 'react'
import Tasks from './Tasks'

const TaskContainers = ({Todo,deleteToDo}) => {
  return (
      
 <div className="container-task">

      {Todo.map((Todo, index)=>{
        return(<Tasks   todo={Todo} index={index} deleteToDo={deleteToDo}/>) 

      })}
      </div>
      
  )
}

export default TaskContainers