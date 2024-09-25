"use client";
import React, { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  icon?: React.ReactElement;
};

const Input: React.FC<InputProps> = ({ label, error, icon, ...props }) => {
  return (
    <div className="w-full">
      {!!label && (
        <label
          htmlFor={props.id}
          data-testid={`${label}-label`}
          className="text-gray-500 ml-2"
        >
          {label}
        </label>
      )}
      <div
        className={`flex gap-1 border rounded-md px-2 bg-white items-center ${
          !!error ? "border-red-500" : "border-gray-400"
        }`}
        data-testid={`${props.id}-input`}
      >
        {icon}
        <input {...props} className="border-none outline-none p-2 w-full" />
      </div>
      {!!error && (
        <p
          data-testid={`${props.id}-error`}
          className="text-red-500 ml-2 text-[16px]"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
