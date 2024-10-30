function Button({ onClick, label }) {
    return (
      <button onClick={onClick} className="todo-button">
        {label}
      </button>
    );
  }
  
  export default Button;