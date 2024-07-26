import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { TextArea } from "../ui/text-aria";
import { ModalProps } from "./types";
import todos from "./../../store/todos";
import { observer } from "mobx-react-lite";

export const ModalWindow = observer(({ children, modalTogger }: ModalProps) => {
  return (
    <div>
      <Input
        label="Название задачи"
        value={todos.todoTitle}
        onChange={(e) => todos.titleHendler(e.target.value)}
      />
      <TextArea
        label="Описание задачи"
        value={todos.todoText}
        onChange={(e) => todos.textHandler(e.target.value)}
      />
      {children}
      <Button onClick={modalTogger}>Закрыть</Button>
    </div>
  );
});
