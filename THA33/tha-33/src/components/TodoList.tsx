interface TodoListProps{
    title: string,
    done: boolean
    todos: any
    setTodos: any
    id:number
}

interface TodoType{
    title:string,
    done:boolean
  }

export const TodoList = ({title, done, todos, setTodos, id}:TodoListProps) => {
    return (
        <div className="todo-list">
            <h3 className={done? "task-completed" : ""}>{title}</h3>
            <button onClick={()=>{
                const clonedTodo = [...todos]
                for(let i=0; i < clonedTodo.length; i++){
                    if(i === id)
                        clonedTodo[i].done = !todos[i].done;
                }
                setTodos(clonedTodo);
                console.log(todos);
                
            }}>Done</button>
            <button onClick={()=>{
                setTodos(todos.filter((item:TodoType, index:number)=>
                    index !== id
                ));
            }}>Delete</button>
        </div>
    )
}
