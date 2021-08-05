import { useContext } from "react";
import { StatusContext } from "./StatusContext";

const Home = ()=>{
    const [isLogin, setIsLogin] = useContext(StatusContext);
    function handleStatus(){
        setIsLogin(!isLogin);
    }

    return(
        <div className="home">
            <h1>Home Page</h1>
            <h3>If not logged in, can't access Profile and Dashboard</h3>
            <button onClick={handleStatus}>{isLogin ? "Logout" : "Login"}</button>
        </div>
    )
}

export default Home;