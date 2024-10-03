function Input({ value, onChange, placeholder }) {
    return (
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="todo-input"
        placeholder={placeholder}
      />
    );
  }
  
  export default Input;