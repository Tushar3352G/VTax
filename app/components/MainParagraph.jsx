import React from "react";

const MainParagraph = ({ text, align, mt }) => {
  return <p className={`${align} ${ mt ? mt : "mb-0"} font-['Poppins'] font-normal main-paragraph`}>{text}</p>;
};

export default MainParagraph;
