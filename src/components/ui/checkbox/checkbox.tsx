import { CheckboxProps } from "./types";
import * as S from "./styled";

export function Checkbox({ label, id, $widthAndHeight, ...props }: CheckboxProps) {
  return (
    <S.Label>
        {label}
      <S.Checkbox {...props} $widthAndHeight={$widthAndHeight} id={`checkbox-${id}`} type="checkbox"/>
    </S.Label>
  );
}
