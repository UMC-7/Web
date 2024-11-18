import {axiosInstance} from "../../apis/axios-instance"

const useGetMovies = async ({categories, pageParam}) => {
    const {data} = await axiosInstance.get(`/movie/${categories}?language=ko-KR&page=${pageParam}`);
    console.log('로딩되는 중...')
    return data;
}

export {useGetMovies}