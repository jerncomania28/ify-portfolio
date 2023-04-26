import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => {
  return <p className={`my-3 ${className}`}>{children}</p>;
};

export default Paragraph;
