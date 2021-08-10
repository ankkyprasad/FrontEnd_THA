import {useState} from "react";
import {useDispatch} from "react-redux";
import {addItem} from "./actions/index"

function AddTodo(){
    const [item, setItem] = useState("");
    const dispatch = useDispatch();

    const addItemHandler = ()=>{
        if(item === "")
            return;
        setItem("");
        dispatch(addItem({
            title: item,
            done: false,
        }))
    }
    return(
        <div className="add-todo">
            <input type="text" placeholder="Add Item" onChange={(e)=>setItem(e.target.value)} value={item} />
            <button onClick={addItemHandler}>Add Item</button>
        </div>
    )
}

export default AddTodo;