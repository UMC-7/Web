function Input({ value, onChange, placeholder, className }) {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={className}
        />
    );
}
