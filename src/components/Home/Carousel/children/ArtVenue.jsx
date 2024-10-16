import React from "react";

import VenueIcon from "~/assets/Carousel/Artvenue.svg";
import VenueUser from "~/assets/Carousel/ArtvenueUser.png";

const ArtVenue = () => {
  return (
    <div className="bg-white w-full h-full p-6 flex flex-col justify-between gap-y-8 rounded-[20px] shadow-md">
      <div className="w-full  flex items-center gap-x-2 py-4">
        <img src={VenueIcon} />
        <span className="text-colorCompany font-bold text-2xl">ArtVenue</span>
      </div>
      <p className="text-2xl font-normal text-black">
        A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id
        ultrices a lacus. Pretium vehicula pretium posuere justo sed.
      </p>
      <div className="flex gap-x-4 items-center">
        <img src={VenueUser} />
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

export default ArtVenue;
