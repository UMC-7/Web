import { useQuery } from "@tanstack/react-query"
import { useGetMovies } from "./useGetMovies"
import { useState } from "react";

function useGetPagination(category, currentPage) {
    
    return useQuery({
        queryFn: () => useGetMovies({categories: category, pageParam: currentPage}),
        queryKey: ['movies', category, currentPage], 
        keepPreviousData: true, 
    })
}

export {useGetPagination}