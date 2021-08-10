import './App.css';
import LandingPage from "./Components/LandingPage/LandingPage.jsx"
import Tha26App from './Components/Tha26/Tha26App';
import Tha27App from './Components/Tha27/Tha27App';
import Tha28App from './Components/Tha28/Tha28App';
import Tha29App from './Components/Tha29/Tha29App';
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/" exact component={LandingPage}/>
      <Route path="/tha26" exact component={Tha26App}/>
      <Route path="/tha27" exact component={Tha27App}/>
      <Route path="/tha28" exact component={Tha28App}/>
      <Route path="/tha29" exact component={Tha29App}/>
    </div>
    </Router>
  );
}

export default App;
