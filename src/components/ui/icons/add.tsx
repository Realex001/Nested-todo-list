import { SVGProps } from "react";

export function Add({
  height = 16,
  width = 16,
  color = "#11304E",
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={height}
      height={width}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 0V5H0V7H5V12H7V7H12V5H7V0H5Z" fill={color} />
    </svg>
  );
}
