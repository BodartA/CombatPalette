import { ReadStream } from "fs";
import { ArrowRight, Component } from "lucide-react";
import Link from "next/link";
import React from "react";

const Button = ({ name = "Button" }) => {
  return (
    <div>
      <button className="">{name}</button>
    </div>
  );
};

export default Button;

export const PrimaryButtonWIcon = ({ name = "smallButton", link = "/", icon = <ArrowRight className="flex my-auto w-[20px] h-[20px]" />, buttonSize = "small" }) => {

  let mesures = ""

  switch (buttonSize) {
    case "small":
      mesures = "px-6 py-[18px] text-base font-semibold"
      break
    case "default":
      mesures = "lg:px-9 lg:py-6 px-6 py-[18px] lg:text-lg text-base font-semibold "
      break
    default:
      mesures = "px-6 py-[18px] text-base font-semibold"
      break
  }

  return (
    <div>
      <button className={`flex bg-emerald-800 text-white ${mesures} rounded-full hover:text-emerald-800 hover:bg-white border-[1px] border-emerald-800 transition duration-300 text-nowrap font-dm-sans gap-2`}>
        <Link href={link}>{name}</Link>
        {icon}
      </button>
    </div>
  );
};



/*

export const DefaultPrimaryButtonArrowResp = ({ name = "defaultButtonWIcon", link = "/", icon = <ArrowRight /> }) => {
  return (
    <div className=" inline-block">
      <button className=" flex bg-emerald-800 text-white lg:px-9 lg:py-6 px-6 py-[18px] rounded-full hover:text-emerald-800 hover:bg-white border-[1px] border-emerald-800 transition duration-300 text-center text-nowrap font-dm-sans gap-2">
        <Link href={link}>{name}</Link>
        {icon}
      </button>
    </div>
  );
};

*/
