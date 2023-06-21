"use client";

import React, { InputHTMLAttributes, ChangeEvent } from "react";
import Button from "@/ui/buttons/button";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  labelStyle?: string;
  className: string;
  StartIcon?: React.ReactNode;
  EndIcon?: React.ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onStartButtonClick?: (e: React.MouseEvent) => void;
  onEndButtonClick?: (e: React.MouseEvent) => void;
}

const InputBox = ({
  name,
  label,
  type,
  placeholder,
  onChange,
  labelStyle,
  StartIcon,
  EndIcon,
  onStartButtonClick,
  onEndButtonClick,
  className,
}: InputProps) => {
  const [errors, setErrors] = React.useState<{}[]>([]);

  return (
    <>
      <label htmlFor={label} className={labelStyle ? labelStyle : "sr-only"}>
        {label}
      </label>

      <div className={`relative flex    `}>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className={`
           
            ${className} 
            ${
              errors.length > 0
                ? " border-critical-50 focus:border-critical-50"
                : ""
            }
            my-1 border-[0.15rem]
            border-neutral-50 text-paragraph
            outline-none rounded-xs  
             focus:border-neutral-90 
            disabled:bg-neutral-10 px-[1.2rem] py-[2rem]`}
          onChange={onChange}
        />

        {StartIcon && (
          <div className="absolute inset-y-0 left-[17px] flex items-center">
            <Button
              variant="transparent"
              modifier="plain"
              onClick={onStartButtonClick}
            >
              {StartIcon}
            </Button>
          </div>
        )}

        {EndIcon && (
          <div className="absolute inset-y-0 right-3 flex items-center">
            <Button
              variant="transparent"
              modifier="plain"
              onClick={onEndButtonClick}
            >
              {EndIcon}
            </Button>
          </div>
        )}
      </div>

      <p
        className={` text-label text-neutral-90 ${
          errors.length > 0 ? "text-critical-50" : ""
        }`}
      >
        {}
      </p>
    </>
  );
};

export default InputBox;
