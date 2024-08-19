import React from 'react'

const InputContainers = ({Inputval,writeToDo,addToDo}) => {
  return (
    
    <div className="input-container">
          <input type="text"  value={Inputval} onChange = {writeToDo} />
          <button onClick={addToDo}>+</button>
     </div>     
    
  )
}

export default InputContainers;