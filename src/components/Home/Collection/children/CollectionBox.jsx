import React from "react";
import Screens from "~/assets/Collection/Col.svg";
import { GoSearch } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";
import { collectionBoxData } from "~/data/data";

const CollectionBox = () => {
  return (
    <div className=" h-full flex items-center">
      <div className="w-[50%] flex flex-col gap-y-4 items-start justify-start h-full">
        <div className="bg-white w-[35%] gap-x-4 font-medium text-colorPrimaryBlack rounded-md shadow-md p-4 flex items-center justify-center ">
          <span className=" text-xl flex  items-center">
            <GoSearch />
          </span>
          <span className="flex items-center text-xl">Bibendum tellus</span>
          <span className="text-xl  flex items-center">
            <FaArrowRight />
          </span>
        </div>
        {collectionBoxData.map((item) => (
          <div className="gap-x-4 font-medium text-colorPrimaryBlack w-[35%] p-4 flex items-center justify-start">
            <span className="text-xl">
              <item.icon />
            </span>
            <span className="text-xl">{item.text}</span>
          </div>
        ))}
      </div>
      <div className=" w-[70%] flex justify-end items-center">
        <img src={Screens} className="w-[900px]" />
      </div>
    </div>
  );
};

export default CollectionBox;
