import { useRef } from "react";

function UncontrolledInput() {
    const inputRef = useRef();

    const handleSubmit = () => {
        console.log(`입력: ${inputRef.current.value}`);
    };

    return (
        <div>
            <input type="text" ref={inputRef}/>
            
        </div>
    )
}

export default UncontrolledInput;