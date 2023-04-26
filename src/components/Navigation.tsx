import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

import NavLink from "./NavLink";
import Footer from "./Footer";

import Logo from "../assets/logo-text.svg";
import ArrowUp from "../assets/ArrowUp.svg";

const NAV_ROUTES = ["Home", "About me", "Projects", "Email Me", "View My CV"];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSetIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full relative">
        <div className="w-full relative bg-header">
          <div className="w-[90%] flex justify-between items-center mx-auto py-[40px] max-w-[1500px]">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
            <div
              className="w-6 h-6 relative text-center transition-all duration-500 ease-in-out z-20"
              onClick={handleSetIsOpen}
            >
              {/* menu Btn */}
              <span
                className={`w-full h-[3px] transparent rounded absolute top-[50%] left-0 transition-all duration-500 ease-in-out before:content-[''] before:h-[3px] before:bg-card before:rounded before:absolute before:-top-[5px] before:w-full before:left-0 before:transition-all before:duration-500 before:ease-in-out after:content-[''] after:h-[3px] after:bg-card after:rounded after:absolute after:top-[5px] after:w-[60%] after:left-0 after:transition-all after:duration-500 after:ease-in-out cursor-pointer ${
                  isOpen &&
                  "before:transform before:translate-y-[5px] before:rotate-45 before:bg-card after:-translate-y-[5px] after:-rotate-45 after:w-full after:bg-card"
                }`}
              ></span>
            </div>

            {isOpen && (
              <motion.div
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                exit={{ y: -200, opacity: 0 }}
                className={`w-full h-[100vh] fixed top-0 left-0 bg-black z-10 flex items-center justify-center flex-col`}
              >
                {NAV_ROUTES.map((route, _idx) => (
                  <NavLink
                    key={_idx}
                    index={_idx}
                    handleSetIsOpen={handleSetIsOpen}
                  >
                    {route}
                  </NavLink>
                ))}
              </motion.div>
            )}
          </div>
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
      <Footer />
    </>
  );
};

export default Navigation;
