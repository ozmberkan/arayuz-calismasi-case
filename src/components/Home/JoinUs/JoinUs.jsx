import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

import Desktop from "~/assets/JoinUs/Desktop.png";

import Yellow from "~/assets/JoinUs/Yellow.svg";
import Pink from "~/assets/JoinUs/Pink.svg";
import Green from "~/assets/JoinUs/Green.svg";
import Purple from "~/assets/JoinUs/Purple.svg";
import Brown from "~/assets/JoinUs/Brown.svg";
import Blue from "~/assets/JoinUs/Blue.svg";

const JoinUs = () => {
  return (
    <div className="flex w-ful h-screen px-20 py-40 bg-[#FFFBEB]">
      <div className="w-full bg-white rounded-xl joinUsBoxShadow p-20 flex">
        <div className="flex-1  w-full pr-20 py-[38px] ">
          <div className="w-full pr-20 h-full flex flex-col gap-y-6">
            <h1 className="text-[56px] font-extrabold">Why join us</h1>
            <div>
              <span className="flex items-center gap-x-2 text-xl text-colorPrimaryBlack">
                <FaCheck className="text-colorCheck" /> Est et in pharetra magna
                adipiscing ornare aliquam.
              </span>

              <span className="flex items-center gap-x-2 text-xl text-colorPrimaryBlack">
                <FaCheck className="text-colorCheck" /> Tellus arcu sed
                consequat ac velit ut eu blandit.
              </span>

              <span className="flex items-center gap-x-2 text-xl text-colorPrimaryBlack">
                <FaCheck className="text-colorCheck" /> Ullamcorper ornare in et
                egestas dolor orci.
              </span>
            </div>
            <div className="w-full flex justify-start items-center">
              <Link className="border-2 rounded-lg p-3 border-colorPrimaryBrown hover:border-colorPrimaryBrown/70 flex justify-center items-center font-medium text-base text-colorPrimaryBrown hover:text-colorPrimaryBrown/70 transition-colors duration-150">
                Sign up now
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center relative">
          <img src={Yellow} className="absolute drop-shadow-2xl w-[1300px]" />
          <img
            src={Purple}
            className="absolute drop-shadow-2xl -bottom-12 right-32"
          />
          <img src={Brown} className="absolute drop-shadow-2xl top-12 left-0" />
          <img
            src={Pink}
            className="absolute drop-shadow-2xl -bottom-24 -right-12"
          />
          <img src={Desktop} className="w-full  object-cover drop-shadow-2xl" />
          <img src={Blue} className="absolute -top-24 right-24" />
          <img
            src={Green}
            className="absolute drop-shadow-2xl -bottom-12 left-24"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
