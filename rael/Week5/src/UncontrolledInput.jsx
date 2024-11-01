import { useRef } from "react";

function UncontrolledInput() {
    const inputRef = useRef();

    const handleSubmit = () => {
        console.log(`입력: ${inputRef.current.value}`);
    };

    return (
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={handleSubmit}>제출</button>
        </div>
    )
}

export default UncontrolledInput;