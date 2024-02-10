import React, { useState } from "react";
import deleteIcon from "./icons/icons8-delete-30.png";
import edditIcon from "./icons/icons8-edit-50.png";
import todoListStyle from "./todoList.module.css";
export default function Work({ work, onTick, onDelete, onEddit }) {
  const [eddit, setEddit] = useState(false);
  const [edditValue, setEdditValue] = useState("");
  return (
    <li className={todoListStyle.works} style={{ position: "relative" }}>
      <span style={{textDecoration : work.done ?'line-through' : ``}}>{work.task}</span>
      {work.eddited && (
        <small style={{ color: "lightgray", position: "absolute", left: 70 }}>
          (eddited)
        </small>
      )}
      <small>{work.date}</small>
      <div>
        <input
          type="checkbox"
          checked={work.done}
          onChange={onTick}
          style={{ display: eddit ? `none` : `inline` }}
        />
        <button
          style={{
            backgroundColor: "white",
            border: "none",
            display: eddit ? `none` : `inline`,
          }}
        >
          <img
            src={deleteIcon}
            alt="deleteIcon"
            style={{ cursor: "pointer" }}
            onClick={onDelete}
            width={15}
          />
        </button>
        <button
          onClick={() => setEddit(true)}
          style={{
            backgroundColor: "white",
            border: "none",
            display: eddit ? `none` : `inline`,
          }}
        >
          <img
            style={{ cursor: "pointer" }}
            src={edditIcon}
            alt="edditIcon"
            width={15}
          />
        </button>
        {eddit && (
          <div>
            <input
              type="text"
              value={edditValue}
              onChange={(e) => setEdditValue(e.target.value)}
              placeholder="eddit your todolist"
            />
            <button
              onClick={() => {
                setEddit(false);
                onEddit(edditValue);
              }}
            >
              DONE
            </button>
          </div>
        )}
      </div>
    </li>
  );
}
