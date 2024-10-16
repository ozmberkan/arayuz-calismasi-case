import React from "react";

import WavesIcon from "~/assets/Carousel/Waves.svg";
import WavesUser from "~/assets/Carousel/WavesUser.png";

const Waves = () => {
  return (
    <div className="bg-white w-full h-full p-6 flex flex-col justify-between gap-y-8 rounded-[20px] shadow-md">
      <div className="w-full  flex items-center gap-x-2 py-4">
        <img src={WavesIcon} />
        <span className="text-colorCompany font-bold text-2xl">WAVES</span>
      </div>
      <p className="text-2xl font-normal text-black">
        Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam
        laoreet aenean metus nibh eu scelerisque.
      </p>
      <div className="flex gap-x-4 items-center">
        <img src={WavesUser} />
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

export default Waves;
