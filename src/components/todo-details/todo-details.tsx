import { observer } from "mobx-react-lite";
import todos from "./../../store/todos";
import * as S from "./styled"

export const TodoDetails = observer(() => {
  return (
    <>
      {todos.activeTask && (
        <S.Details>
          <S.DetailsTitle>{todos.activeTask.title}</S.DetailsTitle>
          <S.DetailsText>{todos.activeTask.text}</S.DetailsText>
        </S.Details>
      )}
    </>
  );
});
