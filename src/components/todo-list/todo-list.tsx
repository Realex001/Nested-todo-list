import { observer } from "mobx-react-lite";
import todos from "./../../store/todos";
import { TodoItem } from "../todo-item";

export const TodoList = observer(() => {
  return (
    <div>
      {todos.todoArray.map((todoItem) => (
        <TodoItem key={todoItem.id} isSubTask={false} checkboxHeightAndWidth={20} todoItem={todoItem} />
      ))}
    </div>
  );
});
