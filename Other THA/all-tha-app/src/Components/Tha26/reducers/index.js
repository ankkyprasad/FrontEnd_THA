import changeNameReducer from "./changeNameReducer";
import {combineReducers} from "redux";
import changeEmailReducer from "./changeEmailReducer";

const rootReducer = combineReducers({
    changeName: changeNameReducer,
    changeEmail: changeEmailReducer
});

export default rootReducer;