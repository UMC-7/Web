import { useEffect, useState } from "react"

const useForm= ({initialValues,validate})=>{
    const [values, setValues] = useState(initialValues)
    const [touched, setTouched] = useState({})
    const [error, setError] = useState({})

    const handleChangedInput = (name, value)=>{
        setValues({
            ...values,
            [name]:value
        })
    }
    const handleBlur =(name)=>{
        setTouched({
            ...touched,
            [name]: true
        })
    }

    const getTextInputProps=(name)=>{
        const value = values[name]
        const onChange = (event)=> handleChangedInput(name, event.target.value)
        const onBlur = ()=>handleBlur(name)
        
        return{value, onChange, onBlur}
    }

    useEffect(()=>{
        const newErrors = validate(values)
        console.log(newErrors)
        setError(newErrors)
    }, [validate, values])

    return { values, touched, error, getTextInputProps}
}

export default useForm