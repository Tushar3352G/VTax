import React from "react";
import { MainHeading } from "./components/Headings";
import Image from "next/image";
import Button from "./components/Button";
import MainParagraph from "./components/MainParagraph";

const NotFound = () => {
  return (
    <main className="mx-auto text-center pt-10 w-[90%]">
      <MainHeading text="Sorry! The page <span class='!text-red-700'>isn't found here</span>" />
      <Image
        width={0}
        height={0}
        src="/images/notfound.svg"
        alt="business-svg"
        className="size-[400px] mx-auto block my-10"
        loading="lazy"
      />
      <div className="grid gap-6 place-items-center w-full md:w-1/2 mx-auto">
      <MainParagraph text='The page you’re looking for might have been moved or deleted. Click the button below to return to our homepage and continue your journey."' />
        <Button path="/" text="Back to Home" />
      </div>
    </main>
  );
};

export default NotFound;
