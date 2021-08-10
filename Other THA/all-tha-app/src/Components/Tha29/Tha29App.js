import React from "react";
import Tha29 from "./Tha29";
import store from "./store";
import { Provider } from "react-redux";

const Tha29App = () =>{
    return(
        <React.Fragment>
            <Provider store={store}>
                <Tha29 />
            </Provider>
        </React.Fragment>
    )
}

export default Tha29App;