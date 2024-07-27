import { observer } from "mobx-react-lite";
import todos from "./../../store/todos";

export const TodoDetails = observer(() => {
  return (
    <>
      {todos.activeTask && (
        <div
          style={{
            width: "100%",
            borderLeft: "2px solid rgb(34, 43, 68)",
            background: "rgb(34, 43, 68)",
            }}
        >
          <h2>Task info</h2>
          <h3>{todos.activeTask.title}</h3>
          <p>{todos.activeTask.text}</p>
        </div>
      )}
    </>
  );
});
