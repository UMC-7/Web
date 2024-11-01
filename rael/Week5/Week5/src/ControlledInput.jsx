import { useState } from 'react'

function ControlledInput() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <input type='text' value={inputValue} onChange={handleChange}/>
            <p>입력 : {inputValue}</p>
        </div>
    )
}

export default ControlledInput;