import { Outlet } from "react-router-dom";

import Logo from "../assets/logo.svg";
import Hamburger from "../assets/hamburger.svg";
import ArrowUp from "../assets/ArrowUp.svg";

const Navigation = () => {
  return (
    <>
      <div className="w-full relative bg-offwhite">
        <div className="w-4/5 flex justify-between items-center mx-auto py-4">
          <img src={Logo} alt="logo" />
          <img src={Hamburger} alt="hamburger" />
        </div>
        <Outlet />
      </div>
      <a
        href={"#"}
        className="inline-block py-4 fixed bottom-[2rem] right-[2rem] "
      >
        <img
          src={ArrowUp}
          alt="arrow-up"
          className="border-[1px] bg-footer border-white p-3 rounded-full my-4 animate-bounce "
        />
      </a>
    </>
  );
};

export default Navigation;
