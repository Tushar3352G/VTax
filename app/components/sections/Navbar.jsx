"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-blue-700 flex justify-between items-center w-full px-5 sticky top-0 py-2.5 z-50">
      <Link href="/" className="block size-fit">
        <Image
          src="/images/logo.svg"
          className="h-[50px] md:h-[76px] w-auto"
          width={0}
          height={0}
          sizes="(max-width: 768px) 50px, 76px"
          alt="logo"
        />
      </Link>

      <div
        className={`absolute md:static left-0 top-17.5 ${
          open ? "h-auto py-6 opacity-100" : "h-0 opacity-0"
        } md:h-auto overflow-hidden flex-col md:opacity-100 md:flex-row px-5 bg-white w-full md:w-fit md:bg-transparent md:text-white font-[Poppins] flex gap-6 transition-all duration-300`}
      >
        {["about us", "services", "industries", "contact us"].map((link) => (
          <Link
            className="capitalize md:text-white md:hover:text-blue-400 transition duration-300 text-black hover:text-blue-700"
            href={link.split(" ").join("")}
            key={link}
          >
            {link}
          </Link>
        ))}
      </div>

      <button
        onClick={handleMenu}
        className="flex md:hidden flex-col gap-1.5 w-8 h-6 relative cursor-pointer"
      >
        <div
          className={`absolute top-0 left-0 w-full h-[3px] bg-white rounded-2xl transition-all duration-300 ${
            open ? "rotate-45 top-2.5" : ""
          }`}
        />
        <div
          className={`absolute top-2.5 left-0 w-full h-[3px] bg-white rounded-2xl transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <div
          className={`absolute bottom-0 left-0 w-full h-[3px] bg-white rounded-2xl transition-all duration-300 ${
            open ? "-rotate-45 bottom-2.5" : ""
          }`}
        />
      </button>
    </nav>
  );
};

export default Navbar;
