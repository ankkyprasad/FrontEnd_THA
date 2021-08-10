function changeName(name){
    return{
        type: "CHANGE_NAME",
        name: name
    }
};

function changeEmail(email){
    return{
        type: "CHANGE_EMAIL",
        email: email
    }
};

export {changeName, changeEmail};