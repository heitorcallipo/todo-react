import "../styles/task.sass";

const Task = ({inputEntered}) => {
  return (
    <>
      <div className="taskContainer">
        <div className="buttonsContainer">
          <h4>{inputEntered}</h4>
          <div className="buttons">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
