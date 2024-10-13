import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
    return (
        <MovieSide>
            <div>
                <button>찾기</button>
                <button>영화</button>
            </div>
        </MovieSide>
    );
};

export default Sidebar;

const MovieSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 100%;
    padding: 10px;
    background-color: #323232;
`