import React from "react";

interface StyledHeaderProps {
  className?: string;
  number: string;
  firstText: string;
  secondText: string;
}

const StyledHeader: React.FC<StyledHeaderProps> = ({
  className,
  number,
  firstText,
  secondText,
}) => {
  return (
    <div className={`w-full relative flex flex-col font-fraunces ${className}`}>
      <h1>
        <span className="font-thin">{`${number} /`}</span>{" "}
        <span className="font-bold">{firstText}</span>
      </h1>
      <h1 className="font-bold">{secondText}</h1>
    </div>
  );
};

export default StyledHeader;
