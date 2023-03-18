import { Outlet } from "react-router-dom";

import Logo from "../assets/logo.svg";
import Hamburger from "../assets/hamburger.svg";

const Navigation = () => {
  return (
    <div className="w-full relative">
      <div className="w-4/5 flex justify-between items-center mx-auto py-4">
        <img src={Logo} alt="logo" />
        <img src={Hamburger} alt="hamburger" />
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
