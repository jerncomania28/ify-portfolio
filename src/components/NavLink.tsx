import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface NavLinkProps {
  children: string;
  index: number;
  handleSetIsOpen: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({
  children,
  index,
  handleSetIsOpen,
}) => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: index * 0.2 }}
      exit={{ y: -50, opacity: 0 }}
      onClick={handleSetIsOpen}
      className={`relative text-[30px] inline-block text-card capitalize font-figtree font-[700px] text-[30px] my-4 before:transition-all before:duration-300 before:ease-in-out before:content-[''] before:h-[1px] before:absolute before:-bottom-1 before:left-0 before:w-[40%] before:bg-charcoal hover:before:w-full`}
    >
      <Link to={children === "home" ? "/" : `/#${children}`}>{children}</Link>
    </motion.div>
  );
};

export default NavLink;
