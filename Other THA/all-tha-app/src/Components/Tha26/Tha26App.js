import React from "react";
import Tha26 from "./Tha26";
import store from "./store";
import { Provider } from "react-redux";

const Tha26App = ()=>{
    return(
        <Provider store={store}>
            <React.Fragment>
                <Tha26 />
            </React.Fragment>
        </Provider>
    );
}

export default Tha26App;