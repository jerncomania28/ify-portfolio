import React from "react";

interface SubHeaderProps {
  children: React.ReactNode;
}

const SubHeader: React.FC<SubHeaderProps> = ({ children }) => {
  return (
    <h1 className="my-2">
      <span
        className={`relative text-[16px] font-bold font-source-pro after:w-[150px] after:h-[1px] after:absolute after:rounded after:top-1/2 after:mx-2 after:bg-header`}
      >
        {children}
      </span>
    </h1>
  );
};

export default SubHeader;
