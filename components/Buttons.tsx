import { ArrowRight } from "lucide-react";

const Button = ({ name = "Button" }) => {
  return (
    <div>
      <button className="">{name}</button>
    </div>
  );
};

export default Button;

export const SmallPrimaryButton = ({ name = "smallButton" }) => {
  return (
    <div>
      <button className=" bg-back-purple text-white px-6 py-[18px] rounded-full hover:text-back-purple hover:bg-white border-[1px] border-back-purple transition duration-300 text-base font-semibold text-nowrap font-dm-sans">
        {name}
      </button>
    </div>
  );
};

export const DefaultPrimaryButtonArrowResp = ({
  name = "defaultButtonWIcon",
}) => {
  return (
    <div className=" inline-block">
      <button className=" flex bg-back-purple text-white lg:px-9 lg:py-6 px-6 py-[18px] rounded-full hover:text-back-purple hover:bg-white border-[1px] border-back-purple transition duration-300 lg:text-lg text-base font-semibold text-center text-nowrap font-dm-sans gap-2">
        {name}
        <ArrowRight className=" flex my-auto w-[20px] h-[20px]" />
      </button>
    </div>
  );
};
