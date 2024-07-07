"use client";

import Link from "next/link";
import React, { useState } from "react";
import { PaintbrushVertical } from "lucide-react";
import { X } from "lucide-react";
import { AlignRight } from "lucide-react";
import { SmallPrimaryButton } from "./Buttons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="fixed top-0 left-0 w-full flex lg:h-[110px] h-[70px] pl-4 pr-4 sm:pl-10 sm:pr-10 lg:pl-16 lg:pr-16 justify-between font-dm-sans items-center shadow-sm bg-white">
      <div>
        <Link className="flex lg:gap-[14px] gap-[7px] items-center" href="/">
          <PaintbrushVertical color="#059669" className="lg:w-9 lg:h-9 w-[22px] h-[22px]"></PaintbrushVertical>
          <div className="flex lg:gap-[6px] gap-[3px]">
            <h1 className="font-bold lg:text-4xl text-lg text-md text-emerald-800">Combat</h1>
            <h1 className="font-bold lg:text-4xl text-lg text-emerald-600">Palette</h1>
          </div>
        </Link>


      </div>

    </nav>
  );
};

export default Navbar;
