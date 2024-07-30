"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Twirl as Hamburger } from 'hamburger-react';
import React, { useState } from "react";
import { PaintbrushVertical, UserCheck, CircleUserRound, Baby } from "lucide-react";
import { PrimaryButtonWIcon } from "./Buttons";
import { isatty } from "tty";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  function isActive(linkPathname: string) {
    return pathname === linkPathname
  }

  return (

    <nav className="fixed top-0 left-0 w-full flex lg:h-[110px] h-[70px] pl-4 pr-4 sm:pl-10 sm:pr-10 lg:pl-16 lg:pr-16 justify-between font-dm-sans items-center shadow-sm bg-white">

      <Link className="flex lg:gap-[14px] gap-[7px] items-center" href="/" data-active={isActive("/")}>
        <PaintbrushVertical color="#059669" className="lg:w-9 lg:h-9 w-[22px] h-[22px]"></PaintbrushVertical>
        <div className="flex lg:gap-[6px] gap-[3px]">
          <h1 className="font-bold lg:text-4xl text-lg text-emerald-800">Combat</h1>
          <h1 className="font-bold lg:text-4xl text-lg text-emerald-600">Palette</h1>
        </div>
      </Link>

      <div className="lg:hidden items-center">
        <Hamburger toggled={isOpen} toggle={setIsOpen} color="#065f46" rounded size={22} duration={0.3} />
      </div>

      <div className={`${isOpen ? ' transition-transform -translate-x-full' : ' transition-transform translate-x-5'} 
        lg:transition-none lg:transform-none lg:items-center lg:flex gap-6 lg:static absolute top-full left-full leading-8 h-screen lg:w-auto lg:bg-inherit lg:h-auto mt-[0px] bg-emerald-50 w-[264px] lg:p-0 lg:shadow-none shadow-l-sm`}>
        <ul className=' lg:flex gap-[33px] text-emerald-800 pt-6 pb-4 lg:p-0'>
          <li><Link className=' flex justify-center py-1' href='/' data-active={isActive("/")}>Home</Link></li>
          <li><Link className=' flex justify-center py-1' href='/about' data-active={isActive("/about")}>About</Link></li>
        </ul>
        <div className=' flex justify-center'>
          <PrimaryButtonWIcon name="Login" link="/login" icon={<CircleUserRound />} buttonSize="small" data-active={isActive("/login")}></PrimaryButtonWIcon>
        </div>
      </div>

    </nav >
  );
};

export default Navbar;
