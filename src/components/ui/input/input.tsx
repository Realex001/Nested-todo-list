import { InputProps } from "./types";
import * as S from "./styled";

export function Input({ label, ...props }: InputProps) {
  return (
    <S.Label>
        {label}
      <S.Input {...props} />
    </S.Label>
  );
}
