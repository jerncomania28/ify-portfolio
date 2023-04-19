import Header from "./Header";
import Paragraph from "./Paragraph";
import Button from "./Button";

import Envelope from "../assets/envelope.svg";
import LinkedinLogo from "../assets/LinkedinLogo.svg";

const Footer = () => {
  return (
    <footer className="w-full h-[100vh] bg-footer flex items-center justify-center ">
      <div className="w-[90%] relative mx-auto flex flex-col items-center ">
        <Header
          firstText="Let's work"
          secondText="together."
          className="font-bold mx-auto text-[80px] w-full leading-[70px] md:leading-[88px] text-white justify-self-start"
        />
        <Paragraph className="font-figtree text-footer-text w-full justify-self-start text-[20px] my-4 md:my-auto">
          Ready to stand out from the crowd? Let's work together to <br />{" "}
          create a design that's as unique as you are.
        </Paragraph>
        <div className="inline-flex my-8 self-center md:self-start">
          <Button
            icon={Envelope}
            border
            className="hover:bg-white hover:text-black border-white text-white py-3 w-[150px]"
          >
            Email
          </Button>
          <Button
            icon={LinkedinLogo}
            border
            className="mx-3 hover:bg-white hover:text-black border-white text-white py-3 w-[150px]"
          >
            LinkedIn
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
