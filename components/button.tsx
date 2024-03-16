import { cn } from "@/utils/cn";
import React, { ButtonHTMLAttributes, Children } from "react";
import { cva, type VariantProps, CxOptions } from "class-variance-authority";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = ({ children, variant, ...restProps }: ButtonProps) => {
  return (
    <button
      {...restProps}
      className={buttonVariants({ variant: variant ? variant : "primary" })}
    >
      {children}
    </button>
  );
};

export default Button;

const buttonVariants = cva(
  "px-5 uppercase text-xs font-semibold hover:scale-105 transition-all py-3 rounded-sm",
  {
    variants: {
      variant: {
        primary: ["left-clip", "pr-8", "bg-accent", "text-white"],
        secondary: ["pl-8", "bg-dark", "text-white", "right-clip"],
        "primary-left": ["right-clip", "pl-8", "bg-accent", "text-white"],
        "secondary-right": ["pr-8", "bg-dark", "text-white", "left-clip"],
      },
      defaultVariants: {
        variant: "primary",
      },
    },
  }
);
