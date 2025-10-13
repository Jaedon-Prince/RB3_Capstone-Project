import * as React from "react";
import { cn } from "./utils";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const getButtonClasses = (variant = "default", size = "default") => {
  const baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50";
  
  const variantClasses = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500",
    destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500",
    outline: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-500",
    ghost: "text-gray-900 hover:bg-gray-100 focus:ring-2 focus:ring-gray-500",
    link: "text-blue-600 underline-offset-4 hover:underline focus:ring-2 focus:ring-blue-500"
  };

  const sizeClasses = {
    default: "h-9 px-4 py-2",
    sm: "h-8 px-3 py-1.5 text-xs",
    lg: "h-10 px-6 py-3",
    icon: "h-9 w-9"
  };

  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
};

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  // Simplified without Slot dependency
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn(getButtonClasses(variant, size), className),
      ...props,
    });
  }

  return (
    <button
      className={cn(getButtonClasses(variant, size), className)}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };