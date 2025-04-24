import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}

const Tg = (
  {
    title,
    titleId,
    desc,
    descId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width="20px"
    // height="20px"
    fill="none"
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      // fill="#000"
      d="M15 30c8.286 0 15-6.714 15-15S23.286 0 15 0 0 6.714 0 15s6.714 15 15 15ZM6.864 14.675l14.462-5.576c.671-.243 1.258.163 1.04 1.178h.002l-2.463 11.6c-.183.823-.671 1.023-1.355.636l-3.75-2.764-1.809 1.742c-.2.2-.368.369-.756.369l.266-3.816 6.95-6.279c.303-.266-.067-.416-.466-.151l-8.589 5.407-3.702-1.155c-.804-.255-.822-.803.17-1.191Z"
    />
  </svg>
)

const ForwardRef = forwardRef(Tg);
const Memo = memo(ForwardRef);
export default Memo;
