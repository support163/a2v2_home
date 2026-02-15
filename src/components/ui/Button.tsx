import { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-infinite transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";

  const variants = {
    primary:
      "bg-accent-600 text-white hover:bg-accent-700 focus:ring-accent-500",
    secondary:
      "bg-primary-950 text-white hover:bg-primary-900 focus:ring-primary-950",
    outline:
      "border border-grey-300 text-grey-900 hover:bg-grey-50 focus:ring-grey-300",
    ghost:
      "text-grey-600 hover:text-grey-900 hover:bg-grey-50 focus:ring-grey-300",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
