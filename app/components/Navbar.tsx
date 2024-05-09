import React from "react";
import { Raleway } from "next/font/google";
import Link from "next/link";

const font = Raleway({ weight: "600", subsets: ["latin"] });

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className={`${font.className} text-xl`}>
          <Link href="/">Greet.me</Link>
        </h1>
        <div className="flex gap-4 items-center">
          <p className="font-thin">
            {new Date().toDateString()}
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
