import React from "react";

interface SubHeaderProps {
  children: React.ReactNode;
  color?: boolean;
}

const SubHeader: React.FC<SubHeaderProps> = ({ children, color }) => {
  return (
    <h1 className={`my-2 ${color ? "text-purple" : ""}`}>
      <span
        className={`relative text-[16px] font-bold font-source-pro after:w-[150px] after:h-[1px] after:absolute after:rounded after:top-1/2 after:mx-2 ${
          color ? "after:bg-purple" : "after:bg-header"
        }`}
      >
        {children}
      </span>
    </h1>
  );
};

export default SubHeader;
