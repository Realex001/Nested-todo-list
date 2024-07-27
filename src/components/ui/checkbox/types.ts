import { InputHTMLAttributes } from "react";

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
  label?: string;
  $widthAndHeight?: number;
};
