import { observer } from "mobx-react-lite";
import { TodoItemProps } from "./types";
import { useState } from "react";
import { ModalWindow } from "../modal-window";
import { Button } from "../ui/button";
import todos from "./../../store/todos";
import { Add, Arrow, DeleteIcon } from "../ui/icons";
import { Checkbox } from "../ui/checkbox";

export const TodoItem = observer(({ todoItem }: TodoItemProps) => {
  const { id, title, isCompleted, subTasks } = todoItem;
  const [isModalShown, setIsModalShown] = useState(false);
  const [isSubTasksShown, setIsSubTasksShown] = useState(false);

  function modalWindowToggler() {
    setIsModalShown((prevModalState) => !prevModalState);
  }

  function subTasksToggler() {
    setIsSubTasksShown((prevSubTasks) => !prevSubTasks);
  }
  return (
    <>
      {isModalShown && (
        <ModalWindow modalTogger={modalWindowToggler}>
          <Button onClick={() => todos.addSubtask(id)}>Добавить задачу</Button>
        </ModalWindow>
      )}

      <div>
        <div onClick={subTasksToggler}>
          <Arrow />
        </div>
        <h3 onClick={() => todos.chooseTask(id)}>{title}</h3>
        <div onClick={modalWindowToggler}>
          <Add />
        </div>
        <Checkbox
          id={id}
          checked={isCompleted}
          onChange={() => todos.completeToggler(id)}
        />
        <div onClick={() => todos.removeTask(id)}>
          <DeleteIcon />
        </div>
      </div>
      {subTasks && subTasks.length > 0 && 
        <div>
          {subTasks.map((subTask) => (
            <TodoItem key={subTask.id} todoItem={subTask} />
          ))}
        </div>
      }
    </>
  );
});
