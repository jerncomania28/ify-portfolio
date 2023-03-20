import React from "react";

import LazyImage from "./LazyImage";
import SubHeader from "./SubHeader";

interface SectionProps {
  children: React.ReactNode;
  rowWide?: string;
  src?: string;
  heading?: string;
  center?: boolean;
  imageClassName?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  rowWide,
  src,
  heading,
  center,
  imageClassName,
}) => {
  return (
    <div className="flex flex-col w-[90%] mx-auto relative md:w-full ">
      <div
        className={`pt-[50px] pb-[50px] relative w-full mx-auto ${
          center ? "md:w-[48%]" : "md:w-4/5"
        } `}
      >
        <SubHeader color>{heading}</SubHeader>
      </div>
      <div
        className={`w-full relative mx-auto flex flex-col justify-between my-[50px] md:w-4/5 ${rowWide}`}
      >
        {children}
        {src && (
          <div className="w-full flex relative justify-center my-2">
            <LazyImage src={src} alt={src} className={imageClassName} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;
