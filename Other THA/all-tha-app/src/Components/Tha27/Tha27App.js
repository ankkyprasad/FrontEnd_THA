import React from "react";
import Tha27 from "./Tha27.jsx";
import "./Style27.css"
import store from "./store.js";
import { Provider } from "react-redux";

const Tha27App = () =>{
    return(
        <React.Fragment>
            <Provider store={store}>
                <Tha27 />
            </Provider>
        </React.Fragment>
    )
}

export default Tha27App;