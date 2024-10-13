import React, { forwardRef, ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  content?: string;
  children: React.ReactNode;
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, content, children, ...props }, ref) => {
    return (
      <button ref={ref} className={`${className}`} {...props}>
        <h1 className={`${content} `}>{children}</h1>
      </button>
    );
  }
);

export default CustomButton;
