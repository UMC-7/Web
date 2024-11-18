import { useEffect, useState } from "react"
import axios from "axios"

const usePost=(url, requestData)=>{
    const [data,setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isError,setIsError] = useState(false)

    useEffect(()=>{
        const fetchData = async() =>{
            setIsLoading(true)
            setIsError(false)
            try{
                const response = await axios.post(url, requestData)

                if(response.status==2001){
                    setData(response.data)
                    console.log("signup success", response.data)
                } else{
                    console.log("signup failed", response.data)
                }
            }
            catch(error){
                setIsError(true)
                console.log("singup error",error)
            }
            finally{
                setIsLoading(false)
            }
        }
        fetchData()

    },[url, requestData])

    return {data, isLoading, isError}
}
export default usePost