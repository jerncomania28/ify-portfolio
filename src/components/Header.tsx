import React from "react";

interface HeaderProps {
  className?: string;
  firstText: string;
  secondText?: string;
  white?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  className,
  firstText,
  secondText,
  white,
}) => {
  return (
    <div className={`text-4xl my-3 font-fraunces ${className}`}>
      <h1 className="my-2">{firstText}</h1>
      <p>{secondText}</p>
    </div>
  );
};

export default Header;
