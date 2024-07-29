import { TextAreaProps } from "./types";
import * as S from "./styled";

export function TextArea({ label, ...props }: TextAreaProps) {
  return (
    <S.Label>
        {label}
      <S.TextArea {...props} />
    </S.Label>
  );
}
