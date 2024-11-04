import { useEffect, useState } from "react"
import axios from "axios"

const usePost=(url, requestData)=>{
    const [data,setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isError,setIsError] = useState(false)

    useEffect(()=>{
        const fetchData = async() =>{
            setIsLoading(true)
            try{
                const response = await axios.post(url, requestData)
                setData(response)
            }
            catch(error){
                setIsError(true)
                console.log(error)
            }
            finally{
                setIsLoading(false)
            }
        }
        fetchData()

    },[])

    return {data, isLoading, isError}
}
export default usePost