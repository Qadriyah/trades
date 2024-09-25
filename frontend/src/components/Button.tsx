import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import Loader from "./Loader";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren & {
    loading?: boolean;
    className?: string;
  };

const Button: React.FC<ButtonProps> = ({
  loading,
  className = "bg-blue-500 w-full py-2 px-3 rounded-md text-white hover:bg-blue-600 flex justify-center items-center gap-2",
  children,
  ...props
}) => {
  return (
    <button {...props} className={className}>
      {loading ? <Loader /> : null}
      <div className="flex gap-2 items-center">{children}</div>
    </button>
  );
};

export default Button;
