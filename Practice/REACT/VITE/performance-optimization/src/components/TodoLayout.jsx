import React from 'react'
import "../styles/style.css";
import { useState } from 'react';
import { taskList } from '../data/taskList';
import { useEffect } from 'react';
const TodoLayout = () => {
  const [todoList,setTodoList]  = useState(taskList)
  const [task,setTask] = useState({
    taskId:0,
    taksName:'',
    isActive:true,
  })
  const [activeTask,setActiveTask] = useState([])

  useEffect(() =>{

    if(todoList.length !== 0){
      const activeTaskList = todoList.filter((value) => value.isActive == true);
      setActiveTask(...activeTask,activeTaskList);
    }
  },[activeTask,todoList])

  const addTask = () =>{
      setTask({...task,taskId:todoList.length + 1 })
      setTodoList(prevList => [...prevList,prevList.push(task)])
      console.log(todoList.length)
  }

  const deleteTask = (index) =>{
    const deletedTask = todoList.slice(index,index+1)
    setTodoList(prevList => [...prevList,deletedTask])
  }
  return (
    <div className='todoContainer'>
       <h2>To Do List</h2>
       <ul>
       {
        (todoList.length != 0) ? todoList.map((value,index) => (
          <li id={value.id} ><div className='taskContainer'>
          <input type="checkbox" id='taskStatus' className='taskStatus' />
          <input type="text" id='task' className='taskItem' value={value.taskName}  />
          <i className="fa-solid fa-xmark delete" onClick={() => deleteTask(index)}></i>
       </div></li>
        )) : ""
       }
          
       </ul>

       <div className="addTask">
         <button onClick={addTask}><i className="fa-solid fa-plus"></i>&nbsp; Add Item</button>
       </div>
    </div>
  )
}

export default TodoLayout
