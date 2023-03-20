import React from "react";
import { Link } from "react-router-dom";

import ArrowRight from "../assets/ArrowRight.svg";

interface ProjectDescriptionProps {
  header: string;
  children: React.ReactNode;
  href: string;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  header,
  children,
  href,
}) => {
  return (
    <div className="flex flex-col justify-start w-[90%] mx-auto my-3 md:my-0 md:w-1/2">
      <h1 className="uppercase text-[32px] font-bold text-header font-figtree">
        {header}
      </h1>
      <p className="text-[16px] font-source-pro text-paragraph my-2">
        {children}
      </p>
      <Link to={href} className="my-3 inline-flex">
        <span className="text-[14px] text-header font-source-pro">
          View Project
        </span>
        <img src={ArrowRight} alt="arrow-right" className="mx-2" />
      </Link>
    </div>
  );
};

export default ProjectDescription;
