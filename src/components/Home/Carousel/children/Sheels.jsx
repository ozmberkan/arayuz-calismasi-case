import React from "react";
import SheelsIcon from "~/assets/Carousel/Shells.svg";
import SheelsUser from "~/assets/Carousel/ShellsUser.png";

const Sheels = () => {
  return (
    <div className="bg-white w-full h-full p-6 flex flex-col justify-between gap-y-8 rounded-[20px] shadow-md">
      <div className="w-full  flex items-center gap-x-2 py-4">
        <img src={SheelsIcon} />
        <span className="text-colorCompany font-bold text-2xl">SHELLS</span>
      </div>
      <p className="text-2xl font-normal text-black">
        Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim.
        Sit purus venenatis velit semper lectus sed ornare quam nulla.
      </p>
      <div className="flex gap-x-4 items-center">
        <img src={SheelsUser} />
        <div>
          <h1 className="text-black font-normal text-lg">Hellen Jummy</h1>
          <span className="text-colorCompany text-base font-normal">
            Team Lead
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sheels;
