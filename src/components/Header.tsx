import React from "react";

interface HeaderProps {
  className?: string;
  firstText: string;
  secondText: string;
  white?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  className,
  firstText,
  secondText,
  white,
}) => {
  return (
    <div className={`text-4xl my-3 font-figtree ${className}`}>
      <h1 className="my-2">
        <span
          className={`relative after:w-12 after:h-1 after:absolute ${
            white ? "after:bg-white" : "after:bg-black"
          } after:rounded after:top-1/2 after:mx-3`}
        >
          {firstText}
        </span>
      </h1>
      <p>{secondText}</p>
    </div>
  );
};

export default Header;
