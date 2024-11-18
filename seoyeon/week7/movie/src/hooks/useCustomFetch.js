import { useEffect, useState } from "react"
import { axiosInstance } from "../apis/axios-instance"

//cosnt {data, isLoading, isError}=useCustomFetch('url')

const useCustomFetch=(url)=>{
    const [data,setData]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const [isError,setIsError]=useState(false)

    useEffect(()=>{     
        console.log("custom-fetch", `url: ${url}`)   
        const fetchData=async()=>{
            setIsLoading(true)
            try{
                const response =  await axiosInstance.get(url)
                setData(response)
            } catch(error) {
                setIsError(true)
                console.log(error)
            } finally{
                setIsLoading(false)
            }
        }

        fetchData();

    },[url]);    //url이 변경될때마다 실행 

    return {data, isLoading, isError}
}
export default useCustomFetch
