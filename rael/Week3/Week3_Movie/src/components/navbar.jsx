import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to={'/'}>YOUNGCHA</Link>
            <Link to='/login'>로그인</Link>
        </nav>
    );
};

export default Navbar;