import { useState } from "react";
import "../styles/topContent.sass"
import "../styles/reset.sass"
import Input from "./Input";
import Button from "./Button";
import Task from "./Task";

const TopContent = () => {
  const [inputEntered, setInputEntered] = useState("")

  return (
    <>
      <div className="topContent">
        <h1>Todo List</h1>
        <h3>A total of 0 tasks have been completed.</h3>
        <div className="actionContainer">
          <Input inputEntered={inputEntered} setInputEntered={setInputEntered}/>
          <Button />
        </div>
        <Task />
      </div>
    </>
  );
};

export default TopContent;
