import React, { useState } from "react";
import todoListStyle from "./todoList.module.css"
export default function Add_Works({ onAdd ,setTasks ,tasks }) {
  
  return (
    <div  className={todoListStyle.add_work}>
      <input
      placeholder="new todo . . ."
        type="text"
        value={tasks}
        onChange={(e) => setTasks(e.target.value)}
      />
      <button
        onClick={() => {
          onAdd()
          setTasks("");
        }}
      >
        ADD NEW TASK
      </button>
    </div>
  );
}
