import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        primary: "bg-primary-50",
        critical: "bg-critical-50",
        transparent: "bg-transparent",
        white: "bg-white",
        neutral: "bg-neutral-50",
      },

      modifier: {
        outline: "border font-normal",
        plain: "border-none  font-medium ",
        filled: "font-normal text-white",
      },

      rounded: {
        true: "rounded-xs",
      },

      size: {
        small: "py-2 px-[2rem] ",
        regular: "py-[1.2rem] px-[2rem]",
      },

      fullWidth: {
        true: "w-full",
      },
    },

    compoundVariants: [
      {
        variant: "primary",
        modifier: "plain",
        className:
          "bg-transparent text-primary-80 hover:text-primary-60 disabled:text-primary-40",
      },

      {
        variant: "primary",
        modifier: "outline",
        className:
          "bg-white border-primary-80 text-primary-80 hover:text-primary-60 disabled:bg-primary-40",
      },

      {
        variant: "primary",
        modifier: "filled",
        className: "text-white hover:bg-primary-80 disabled:bg-primary-30",
      },
      {
        variant: "critical",
        modifier: "filled",
        className: "text-white hover:bg-critical-80 disabled:bg-critical-30",
      },
    ],
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      fullWidth,
      rounded,
      modifier,
      size,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            modifier,
            rounded,
            fullWidth,
            className,
          })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
