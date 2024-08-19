import { useState } from "react";
import "./App.css";
import InputContainers from "./components/InputContainers";
import TaskContainers from "./components/TaskContainers";

function App() {
  const [Inputval ,setInputval] = useState('')
  const[Todo , setToDo]=useState([])

  function writeToDo(e){
    setInputval(e.target.value);
  }
  
  function addToDo(){
  if(Inputval!=''){
    setToDo((prevToDo)=>[...prevToDo,Inputval])
    setInputval('')
  }
  }
  
  function deleteToDo(todoindex){
    setToDo((prevToDo)=>prevToDo.filter( (prevToDo,prevtodoIndex)=>{
     return prevtodoIndex!==todoindex
    }
    ))

  }
  
  return (
    <>
      <main>
        <h1>ToDo List</h1>
        <InputContainers Inputval={Inputval} writeToDo={writeToDo} addToDo={addToDo} />
        <TaskContainers Todo={Todo} deleteToDo={deleteToDo}/>
        
      </main>
    </>
  );
}

export default App;
