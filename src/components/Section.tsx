import React from "react";

import LazyImage from "./LazyImage";
import SubHeader from "./SubHeader";

interface SectionProps {
  children: React.ReactNode;
  rowWide?: string;
  src?: string;
  imageClassName?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  rowWide,
  src,
  imageClassName,
}) => {
  return (
    <div className="flex flex-col w-full mx-auto relative max-w-[1500px] md:w-full ">
      <div
        className={`w-full relative flex flex-col mx-auto justify-between my-[50px] md:w-[90%] ${rowWide}`}
      >
        {children}
        {src && (
          <div className="w-full relative flex justify-center items-center my-2 md:w-[50%]">
            {/* <LazyImage src={src} alt={src} className={imageClassName} /> */}
            <img src={src} alt={src} className={imageClassName} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;
