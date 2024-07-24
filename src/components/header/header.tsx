import { HeaderProps } from "./types";
import * as S from "./styled";
import { Add } from "../ui/icons";

export function Header({ modalToggler }: HeaderProps) {
  return (
    <S.Header>
      <S.HeaderTitle>Список задач</S.HeaderTitle>
      <div onClick={modalToggler}>
        <Add />
      </div>
    </S.Header>
  );
}
