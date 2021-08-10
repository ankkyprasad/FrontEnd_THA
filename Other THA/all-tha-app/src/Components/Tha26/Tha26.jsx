import "./Style26.css"
import { changeName, changeEmail } from "./actions";
import { useSelector, useDispatch } from "react-redux";

const Tha26 = () =>{
    const name = useSelector(state =>state.changeName);
    const email = useSelector(state =>state.changeEmail);
    const dispatch = useDispatch();

    const changeNameHandler = (e)=>{
        dispatch(changeName(e.target.value));
    }
    const changeEmailHandler = (e)=>{
        dispatch(changeEmail(e.target.value));
    }

    return(
        <div className="tha-26">
            <h1>THA 26</h1>
            <input type="text" placeholder="Name" onChange={changeNameHandler}/>
            <input type="text" placeholder="Email" onChange={changeEmailHandler}/>
            <div className="display">
                <div className="name">Name: {name}</div>
                <div className="email">Email: {email}</div>
            </div>
        </div>
    )
}

export default Tha26;