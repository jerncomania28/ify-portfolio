import Header from "./Header";
import Paragraph from "./Paragraph";
import Button from "./Button";

import Envelope from "../assets/envelope.svg";
import LinkedinLogo from "../assets/LinkedinLogo.svg";
import ArrowUp from "../assets/ArrowUp.svg";

const Footer = () => {
  return (
    <footer className="w-full relative pt-16 pb-4 px-3 bg-footer md:pb-8">
      <div className="w-[95%] mx-auto relative flex flex-col justify-between items-center md:w-4/5 md:flex-row ">
        <div className=" w-full md:w-1/2 text-left">
          <Header
            firstText="Let's work"
            secondText="together"
            className="text-white font-bold"
            white
          />
          <Paragraph className="text-white my-4 text-left">
            Ready to stand out from the crowd? Let's work together to create a
            design that's as unique as you are.
          </Paragraph>
          <div className="flex my-4">
            <Button
              icon={Envelope}
              border
              className="border-white text-white ml-0"
            >
              Email me
            </Button>
            <Button icon={LinkedinLogo} className="border-white text-white">
              LinkedIn
            </Button>
          </div>
        </div>
        <a href={"#"} className="flex justify-end w-full py-4">
          <img
            src={ArrowUp}
            alt="arrow-up"
            className="border-[1px] border-white p-3 rounded-full my-4"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
