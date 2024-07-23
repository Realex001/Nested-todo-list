import { CheckboxProps } from "./types";
import * as S from "./styled";

export function Checkbox({ label, id, ...props }: CheckboxProps) {
  return (
    <S.Label>
        {label}
      <S.Checkbox {...props} id={`checkbox-${id}`} type="checkbox"/>
    </S.Label>
  );
}
