import Link from "next/link";
import React from "react";

const Button = ({ text, path, align, mt }) => {
  return (
    <Link
      className={["button-primary", align , mt].filter(Boolean).join(" ")}
      href={path} >
      {text}
    </Link>
  );
};

export default Button;
