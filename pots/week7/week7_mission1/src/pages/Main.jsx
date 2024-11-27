import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import View from '../components/View';

const BASE_URL = `https://api.themoviedb.org/3/account/21559023/favorite/movies?language=ko-KR&page=1&sort_by=created_at.asc`;
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

const MainPage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await axios.get(BASE_URL, {
                    headers: {
                        Authorization: `Bearer ${VITE_API_KEY}`
                    }
                });
                // 응답에서 data.results를 추출하여 movies 상태에 저장
                setMovies(response.data.results);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        getMovies();
    }, []);

    return (
        <Container>
            <View movies={movies}/>
        </Container>
    );
};

export default MainPage;

const Container = styled.div`
    position: fixed;
    top: 97px;
    left: 200px;
    width: 100%;
    height: 100vh;
    background-color: black;
`;