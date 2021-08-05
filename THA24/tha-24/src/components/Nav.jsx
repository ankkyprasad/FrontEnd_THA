import {Link} from "react-router-dom";
import { useContext } from "react";
import { StatusContext } from "./StatusContext";

const Nav = ()=>{
    const [isLogin, setIsLogin] = useContext(StatusContext);
    console.log(isLogin);
    return(
        <div className="nav">
            <ul className="nav-links">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to={isLogin ? "/profile" : "/"}>
                    <li>Profile</li>
                </Link>
                <Link to={isLogin ? "/dashboard" : "/"}>
                    <li>Dashboard</li>
                </Link>
            </ul>
        </div>
    )
}

export default Nav;