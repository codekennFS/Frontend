import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
  href: string;
}

const buttonClasses = cva("", {
  variants: {
    variant: {
      primary: "",
      secondary: "",
      destructive: "",
      monochrome: "",
    },
    modifier: {
      outline: "",
      plain: "",
    },
    size: {
      small: "",
      medium: "",
      large: "",
    },
    fullWidth: {
      true: "w-full",
    },
    disabled: {
      true: "",
    },
  },
  compoundVariants: [
    {
      modifier: "outline",
      variant: "destructive",
      className: "text-destructive",
    },
  ],

  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export const Button = ({
  children,
  variant,
  modifier,
  size,
  fullWidth,
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={buttonClasses({
        variant,
        modifier,
        size,
        fullWidth,
        disabled,
      })}
    >
      {" "}
      {children}
    </button>
  );
};
