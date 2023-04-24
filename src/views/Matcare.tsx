import Header from "../components/Header";
import Paragraph from "../components/Paragraph";

import MatPrototype from "../assets/matcare/matcare-type.svg";

const MatCare = () => {
  return (
    <div className="w-full relative">
      <div className="w-full relative bg-white pt-[30px] pb-[100px]">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative max-w-[1500px] md:flex-row ">
          <div className="flex flex-col w-full relative md:w-[50%]">
            <Header
              firstText="Prototype."
              className="mb-4 text-[60px] font-bold md:text-[96px]"
            />
            <Paragraph className="text-[20px] my-4 leading-[40px] md:text-[24px]">
              Lets see a quick flow of how users can achieve there goals
            </Paragraph>
          </div>
          <div className="w-full relative md:w-[50%] flex justify-end items-center">
            <img
              src={MatPrototype}
              alt="Mat-prototype"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatCare;
