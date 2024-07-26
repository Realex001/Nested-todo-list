import { observer } from "mobx-react-lite";
import todos from "./../../store/todos"

export const TodoDetails = observer(()=>{
    return( 
        <>
        {
            todos.activeTask && 
            <div>
                <h2>Task info</h2>
                <h3>
                    {todos.activeTask.title}
                </h3>
                <p>{todos.activeTask.text}</p>
            </div>
        }
        </>
    )
})