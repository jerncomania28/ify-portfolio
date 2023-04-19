import React from "react";
import { Link } from "react-router-dom";

import Padlock from "../assets/padlock.svg";

interface CardProps {
  children: React.ReactNode;
  projectName: string;
  projectDescriptionSlug: string;
  category: string;
  href?: string;
  projectImage: string;
}

const Card: React.FC<CardProps> = ({
  children,
  href,
  projectName,
  projectDescriptionSlug,
  category,
  projectImage,
}) => {
  return (
    <div className={`relative font-figtree`}>
      <div className="w-full bg-card relative h-[350px]">
        <img
          src={projectImage}
          alt="card-img"
          className="w-full h-full object-fit"
        />
      </div>
      <div className="w-full relative flex flex-col px-2 py-3">
        <div className="flex justify-between items-center my-2">
          <h3 className="text-footer text-capitalize font-bolder text-[20px] leading-[28px]">
            {projectName}
          </h3>
          <p className="text-card-header-color text-[16px] font-[400px]">
            {projectDescriptionSlug}
          </p>
        </div>
        <p className="uppercase font-[600px] text-[14px] text-card-header-color">
          {category}
        </p>
        <p className="font-[400px] text-[16px] text-paragraph my-3">
          {children}
        </p>
        {href && (
          <Link
            to={href}
            className="text-footer text-[16px] font-[600px] inline-flex border-b-[1px] border-solid border-black w-[150px] cursor-pointer"
          >
            <span> Read case study</span>{" "}
            <img src={Padlock} alt="padlock-icon" className="mx-1" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
