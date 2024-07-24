import { ReadStream } from "fs";
import { ArrowRight, Component } from "lucide-react";
import Link from "next/link";
import React from "react";

const SecondaryWhiteButtonWIcon = ({ name = "Secondary White Button Whith Icon", link = "/", icon = <ArrowRight className=" my-auto w-[20px] h-[20px]" />, buttonSize = "small" }) => {
  let mesures = ""

  switch (buttonSize) {
    case "small":
      mesures = "px-6 py-[18px] text-base font-light"
      break
    case "default":
      mesures = "lg:px-9 lg:py-6 px-6 py-[18px] lg:text-lg text-base font-light "
      break
    default:
      mesures = "px-6 py-[18px] text-base font-light"
      break
  }

  return (
    <div>
      <button className={`flex bg-white text-emerald-800 ${mesures} rounded-full hover:text-white hover:bg-emerald-800 border-[1px] border-white transition duration-300 text-nowrap font-dm-sans gap-2`}>
        <Link href={link}>{name}</Link>
        {icon}
      </button>
    </div>
  );
};

export default SecondaryWhiteButtonWIcon;

export const PrimaryButtonWIcon = ({ name = "Primary Button With Icon", link = "/", icon = <ArrowRight className=" my-auto w-[20px] h-[20px]" />, buttonSize = "small" }) => {

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
