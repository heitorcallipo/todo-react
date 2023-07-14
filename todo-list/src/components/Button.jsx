import "../styles/button.sass"

const Button = ({createTask}) => {
  return (
    <>
      <button onClick={createTask}>Enter Task</button>
    </>
  );
};

export default Button;
