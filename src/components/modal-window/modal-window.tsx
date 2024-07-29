import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { TextArea } from "../ui/text-area";
import { ModalProps } from "./types";
import todos from "./../../store/todos";
import { observer } from "mobx-react-lite";
import * as S from "./styled";

export const ModalWindow = observer(({ children, modalTogger }: ModalProps) => {
  return (
    <S.Modal>
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
      <S.FlexWrapper>
        {children}
        <Button onClick={modalTogger}>Закрыть</Button>
      </S.FlexWrapper>
    </S.Modal>
  );
});
