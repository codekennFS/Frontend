"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/ui/buttons/button";
import { Eye, EyeOff } from "lucide-react";
import React, {
  ChangeEvent,
  InputHTMLAttributes,
  SyntheticEvent,
  useState,
} from "react";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "value"> {
  name: string;
  label?: string;
  labelStyle?: string;
  className?: string;
  StartIcon?: React.ReactNode;
  EndIcon?: React.ReactNode;
  error?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
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
  error,
  className,
}: InputProps) => {
  const [hidden, setHidden] = useState(false);

  const onStartButtonClick = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  const onEndButtonClick = (e: SyntheticEvent) => {
    e.preventDefault();
    setHidden(!hidden);
  };

  return (
    <>
      <label htmlFor={name} className={labelStyle ? labelStyle : ""}>
        {label}
      </label>

      <div className={`relative flex`}>
        <Input
          id={name}
          name={name}
          type={name === "password" ? (hidden ? "text" : "password") : type}
          placeholder={placeholder}
          className={`${className} my-1 rounded-sm border disabled:bg-neutral-10 py-3 ${
            error ? "border-critical-50" : "border-black"
          }`}
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

        {(name === "password" || EndIcon) && (
          <div className="absolute inset-y-0 flex items-center right-3">
            <Button
              variant="transparent"
              modifier="plain"
              onClick={onEndButtonClick}
            >
              {name === "password" && hidden ? (
                <EyeOff />
              ) : name === "password" && !hidden ? (
                <Eye />
              ) : (
                EndIcon
              )}
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default InputBox;
