const changeEmailReducer = (state="", action) => {
    if(action.type === "CHANGE_EMAIL"){
        return action.email
    }
    return state;
}

export default changeEmailReducer;