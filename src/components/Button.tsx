import type { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  size: "sm" | "default" | "lg";
  children: ReactNode;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
}

export const Button = ({
  className = "",
  size,
  children,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  const baseClasses = "btn relative overflow-hidden rounded-full font-medium";
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-6 py-4 text-lg",
  };
  const classes = `${baseClasses} ${className} ${sizeClasses[size]}`;
  return (
    <button
      className={classes}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};
