const addItem = (item) =>{
    return{
        type: "ADD_ITEM",
        payload: item,
    };
};

const removeItem = (id) =>{
    return{
        type: "REMOVE_ITEM",
        payload: id
    }
};

const completeItem = (id) =>{
    return{
        type: "COMPLETE_ITEM",
        payload: id
    }
}

export {addItem, removeItem, completeItem};