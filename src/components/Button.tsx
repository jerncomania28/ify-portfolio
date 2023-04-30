import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  border?: boolean;
  className?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  border,
  className,
  href,
}) => {
  return (
    <a
      href={href}
      role="button"
      className={`outline-none flex justify-center items-center rounded-full py-3 px-4 whitespace-nowrap ${
        border ? "border-[1px] border-solid" : ""
      } ${className}`}
    >
      <span className="mr-3">{children}</span>
      {icon}
    </a>
  );
};

export default Button;
