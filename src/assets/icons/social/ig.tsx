import * as React from "react";
import { SVGProps } from "react";

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    // xmlns="http://www.w3.org/2000/svg"
    // width="1em"
    // height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#000"
      d="M0 6.25v7.5A6.25 6.25 0 0 0 6.25 20h7.5A6.25 6.25 0 0 0 20 13.75v-7.5A6.25 6.25 0 0 0 13.75 0h-7.5A6.25 6.25 0 0 0 0 6.25Zm13.75-4.375a4.38 4.38 0 0 1 4.375 4.375v7.5a4.38 4.38 0 0 1-4.375 4.375h-7.5a4.38 4.38 0 0 1-4.375-4.375v-7.5A4.38 4.38 0 0 1 6.25 1.875h7.5Z"
    />
    <path
      fill="#000"
      d="M5 10a5 5 0 1 0 10 0 5 5 0 0 0-10 0Zm8.125 0A3.13 3.13 0 0 1 10 13.125 3.129 3.129 0 0 1 6.875 10 3.129 3.129 0 0 1 10 6.875 3.13 3.13 0 0 1 13.125 10ZM5.291 4.625a.666.666 0 1 0-1.332 0 .666.666 0 0 0 1.332 0Z"
    />
  </svg>
)
export default InstagramIcon;