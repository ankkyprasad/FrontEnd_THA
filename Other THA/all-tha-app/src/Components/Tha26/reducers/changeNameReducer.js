const changeNameReducer = (state="", action)=>{
    if(action.type === "CHANGE_NAME"){
        return action.name;
    }
    return state;
}

export default changeNameReducer;