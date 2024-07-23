import { ButtonProps } from "./types";
import * as S from "./styled";

export function Button({ children, ...props }: ButtonProps) {
  return <S.Button {...props}>{children}</S.Button>;
}
