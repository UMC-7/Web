import './App.css'

const Button=(props)=>{
    

    return(
        <>
        <button
            onClick={props.onClick}
            className={props.className}>
            {props.text}
        </button>
        </>
    )
}
export default Button