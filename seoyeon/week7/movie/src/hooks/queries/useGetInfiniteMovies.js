import { useInfiniteQuery } from "@tanstack/react-query"
import { useGetMovies } from "./useGetMovies"

function useGetInfiniteMovies(category){
    return useInfiniteQuery({
        queryKey:["movies", category],
        queryFn: ({pageParam})=>useGetMovies({category, pageParam}),
        initialPageParam: 1,
        // 다음페이지가 있는지 여부 파악 -> 있다면 다음 페이지 번호 반환!
        getNextPageParam: (lastPage, allPages) =>{  //allPages: 누적되는 페이지들?    
            //const lastMovie = lastPage.results[lastPage.results.length-1];
            const lastMovie = lastPage.results.at(-1)    // 마지막 요소 
            return lastMovie? allPages.length+1 : undefined
        }
    })
}

export {useGetInfiniteMovies}