import { TodoType } from "../../types/todo-type";

export type TodoItemProps = {
  todoItem: TodoType;
  isSubTask: boolean;
  checkboxHeightAndWidth?: number;
};
