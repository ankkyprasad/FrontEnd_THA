import { combineReducers } from "redux";
import NotesReducer from "./NotesReducer";

const rootReducer = combineReducers({
    notes: NotesReducer
});

export type reducerType = ReturnType<typeof rootReducer>

export default rootReducer;
