import "../styles/input.sass"
import "../styles/reset.sass"

const Input = ({ inputEntered, setInputEntered }) => {
  return (
    <>
      <div>
        <input
          value={inputEntered}
          type="text"
          placeholder="What did you plan today? 🤔"
          onChange={(e) => {
            setInputEntered(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default Input;
