import { HeaderProps } from "./types";
import * as S from "./styled";
import { AddIcon } from "../ui/icons";

export function Header({ modalToggler, $isOpenModal }: HeaderProps) {
  return (
    <S.Header>
      <S.HeaderTitle>Список задач</S.HeaderTitle>
      <S.AddTaskWrapper onClick={modalToggler}>
        <S.AddIconWrapper $isOpenModal={$isOpenModal}>
          <AddIcon width={22} height={22} />
        </S.AddIconWrapper>
        Добавить задачу
      </S.AddTaskWrapper>
    </S.Header>
  );
}
