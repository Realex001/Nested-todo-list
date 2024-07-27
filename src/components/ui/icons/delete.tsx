import { SVGProps } from "react";

export function DeleteIcon({
  height = 18,
  width = 19,
  color = "#fff",
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={height}
      height={width}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 2.83333H12L11.1429 2H6.85714L6 2.83333H3V4.5H15M3.85714 15.3333C3.85714 15.7754 4.03775 16.1993 4.35925 16.5118C4.68074 16.8244 5.11677 17 5.57143 17H12.4286C12.8832 17 13.3193 16.8244 13.6408 16.5118C13.9622 16.1993 14.1429 15.7754 14.1429 15.3333V5.33333H3.85714V15.3333Z"
        fill={color}
      />
    </svg>
  );
}
