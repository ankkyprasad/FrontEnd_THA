const updatePlace = (place)=>{
    return{
        type: "UPDATE_PLACE",
        payload: place
    };
};

const updatePlaceData = (place)=>{
    return (dispatch) =>{
        fetch(`https://api.weatherapi.com/v1/current.json?key=2e55cf441c9046a7a9055858210908&q=${place}`)
        .then(res => res.json())
        .then(data =>{
            dispatch({
                type: "UPDATE_PLACE_DATA",
                payload: data
            })
        })
    }
};

const toggleTheme = ()=>{
    return {
        type: "TOGGLE_THEME",
    }
}

export {updatePlace, updatePlaceData, toggleTheme};
