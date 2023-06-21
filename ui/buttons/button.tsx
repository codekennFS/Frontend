import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes, MouseEvent } from "react";

// interface ButtonProps
//   extends ButtonHTMLAttributes<HTMLButtonElement>,
//     Omit<VariantProps<typeof buttonClasses>, "disabled"> {
//   children: React.ReactNode;
//   disabled?: boolean;
//   type?: "button" | "submit" | "reset";
//   onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
// }

const buttonClasses = cva(
  "flex flex-row items-center gap-x-3 text-paragraph transition ",
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

    // defaultVariants: {
    //   variant: "primary",
    //   modifier: "filled",
    //   rounded: true,
    //   size: "regular",
    // },
  }
);
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, modifier, variant, size, fullWidth, rounded, ...props },
    ref
  ) => {
    return (
      <button
        className={buttonClasses({
          variant,
          modifier,
          size,
          fullWidth,
          rounded,
        })}
        //   disabled={disabled}
        //   onClick={() => console.log(onClick)}
        ref={ref}
        {...props}
      >
        {props.children}
      </button>
    );
  }
);

// const Button = ({
//   children,
//   variant,
//   modifier,
//   size,
//   fullWidth,
//   disabled = false,
//   type,
//   onClick,
// }: ButtonProps) => {
//   return (
//     <button
//       type={type}
//     //   className={buttonClasses({
//     //     variant,
//     //     modifier,
//     //     size,
//     //     fullWidth,
//     //   })}
//     //   disabled={disabled}
//     //   onClick={() => console.log(onClick)}
//     ref={ref}
//     {...props}
//     >
//       {children}
//     </button>
//   );
// };

export default Button;
