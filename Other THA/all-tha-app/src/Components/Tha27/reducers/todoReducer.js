const todoReducer = (state=[], action) =>{
    if(action.type === "ADD_ITEM")
        return [...state, action.payload];
    else if(action.type === "REMOVE_ITEM")
        return state.filter((item, index)=> index !== action.payload)
    else if(action.type === "COMPLETE_ITEM"){
        const clonedState = [...state]
        for(let i=0; i < clonedState.length; i++){
            if(i === action.payload)
                clonedState[i].done = !state[i].done;
        }
        return clonedState;
    }
    return state;
}

export default todoReducer;
