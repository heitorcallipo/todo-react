import { useState } from "react";
import "../styles/topContent.sass";
import "../styles/reset.sass";
import Input from "./Input";
import Button from "./Button";
import Task from "./Task";

const TopContent = () => {
  const [inputEntered, setInputEntered] = useState("");
  const [todos, setTodos] = useState([]);

  const createTask = () => {
    if (inputEntered.trim() !== "") {
      setTodos([...todos, inputEntered]);
      setInputEntered("");
    }
  };

  return (
    <>
      <div className="topContent">
        <h1>Todo List</h1>
        <h4>A total of 0 tasks have been completed.</h4>
        <div className="actionContainer">
          <Input
            inputEntered={inputEntered}
            setInputEntered={setInputEntered}
          />
          <Button createTask={createTask} />
        </div>
        <ul>
          {todos.map((todo, index) => {
            <li key={index}>
              {todo}
            </li>
          })}
        </ul>
      </div>
    </>
  );
};

export default TopContent;
