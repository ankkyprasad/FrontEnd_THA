import {useSelector, useDispatch} from "react-redux";
import { removeItem, completeItem } from "./actions";
import {Fragment} from "react"

function ListTodo(){
    const todos = useSelector(state => state.todo)
    const dispatch = useDispatch();

        
    return(
        <Fragment>
            {todos.map((todo, index) =>(
                <div key={index} className={todo.done ? "todo-list task-completed" : "todo-list"}>
                    <h3>{todo.title}</h3>
                    <button onClick={()=>{dispatch(completeItem(index))}}>Done</button>
                    <button onClick={()=>{dispatch(removeItem(index));}}>Delete</button>
                </div>
            ))}
        </Fragment>
    )
}

export default ListTodo;