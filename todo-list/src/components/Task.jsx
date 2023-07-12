import "../styles/task.sass";

const Task = () => {
  return (
    <>
      <div className="taskContainer">
        <div className="buttonsContainer">
          <h3>Task #1</h3>
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
