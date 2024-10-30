import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";

const MovieDetail = () => {
    const { state } = useLocation();
    const { id } = useParams();
    const [credits, setCredits] = useState({cast:[], crew:[]});





    return (
        <>
        <h1>상세페이지다!</h1>
        </>
    );
};

export default MovieDetail;