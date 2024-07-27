import styled from "styled-components";
import { CheckboxProps } from "./types";

export const Checkbox = styled.input<CheckboxProps>`
  width: ${(props) => props.$widthAndHeight}px;
  height: ${(props) => props.$widthAndHeight}px;
  cursor: pointer;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: rgb(14, 12, 21);
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
`;
