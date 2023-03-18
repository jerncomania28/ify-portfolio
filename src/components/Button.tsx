import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  icon: string;
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
      className={`outline-none inline-flex rounded-full py-3 px-4 mx-3 whitespace-nowrap ${
        border ? "border-[1px] border-solid" : ""
      } ${className}`}
    >
      {children}
      <img src={icon} alt="icon" className="mx-2 w-6" />
    </a>
  );
};

export default Button;
