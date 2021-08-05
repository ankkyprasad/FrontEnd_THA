import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import Nav from "./Nav";
import {BrowserRouter as Router, Route} from "react-router-dom" 
import { ChangeStatus } from "./StatusContext";

const MainPage = ()=>{
    return(
            <ChangeStatus>
        <Router>
        <>
            <Nav />
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/dashboard" exact component={Dashboard}/>
        </>
        </Router>
        </ChangeStatus>
    )
}

export default MainPage;