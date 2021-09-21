import {useState, useContext} from 'react'
import {TodoList} from "./TodoList"
import { ThemeContextType } from "./ThemeContext";
import ThemeContext from "./ThemeContext"

interface TodoType{
    title:string,
    done:boolean
  }

export const Todos = () => {
    const [todos, setTodos] = useState<TodoType[]>([]);
    const {theme, } = useContext<ThemeContextType>(ThemeContext);
    const [input, setInput] = useState<string>("");

    return (
        <div className={theme?"todos dark":"todos"}>
            <input type="text" value={input} onChange={(e)=>{
                setInput(e.target.value);
            }} />
            <button onClick={()=>{
                if(input === "")
                    return;

                setTodos([
                    ...todos, {title:input, done:false}
                ])
                setInput("");
            }}>Add Todo</button>
            {todos.map((todo, index)=>(
                <TodoList title={todo.title} done={todo.done} key={index} todos={todos} setTodos={setTodos} id={index}/>
            ))}
      </div>
    )
}
