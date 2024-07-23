import { InputHTMLAttributes } from "react";

export type TextAreaProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};
