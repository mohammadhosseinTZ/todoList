import React, { useReducer, useState } from 'react'
import todoListStyle from "./todoList.module.css"
import Add_Works from './Add_Works';
import Work from './Work';
import { initialState, reducer } from './reducer';




export default function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [tasks, setTasks] = useState("");
  return (
    <div className={todoListStyle.container}>
      <Add_Works onAdd={()=>dispatch({type:"ADD_ITEM" , payload:tasks})} setTasks={setTasks} tasks={tasks}/>
      <ul style={{paddingLeft:0 }}>
        {state.works.map((work , index) =>(
          <Work key={index} work={work} onTick={() => dispatch({ type: "TOGGLE_DOWN", payload: index })} onDelete={() => dispatch({ type: "DELETE_ITEM", payload: index } )} onEddit={(text)=>dispatch({type:"EDDIT" , payload:index , setTasks:setTasks ,tasks:tasks , newEddit :text})} />
        ))}
      </ul>
     
    </div>
  )
}
