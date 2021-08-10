import "./landing.css"
import {Link} from "react-router-dom"; 

const LandingPage = ()=>{
    return(
        <div className="landing-page">
            <div className="tha-btn-containter">
                <Link to="/tha26">
                    <button className="tha-button">THA 26</button>
                </Link>
                <Link to="/tha27">
                    <button className="tha-button">THA 27</button>
                </Link>
                <Link to="/tha28">
                    <button className="tha-button">THA 28</button>
                </Link>
                <Link to="/tha29">
                    <button className="tha-button">THA 29</button>
                </Link>    
            </div>
        </div>
    )
};

export default LandingPage;