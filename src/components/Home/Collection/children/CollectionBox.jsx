import Screens from "~/assets/Collection/Col.svg";
import { GoSearch } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";
import { collectionBoxData } from "~/data/data";

const CollectionBox = () => {
  return (
    <div className="w-full h-full flex items-center lg:flex-row flex-col">
      <div className="lg:w-[50%] w-full flex lg:flex-col flex-row gap-y-4 items-start justify-start h-full lg:overflow-hidden overflow-x-auto">
        <div className="bg-white w-full lg:w-[35%] gap-x-4 font-medium text-colorPrimaryBlack rounded-md shadow-md p-4 flex items-center justify-center ">
          <span className=" text-xl flex  items-center">
            <GoSearch />
          </span>
          <span className="flex items-center lg:text-xl">Bibendum tellus</span>
          <span className="lg:text-xl  flex items-center">
            <FaArrowRight />
          </span>
        </div>
        {collectionBoxData.map((item) => (
          <div
            key={item.id}
            className="gap-x-4 font-medium text-colorPrimaryBlack w-[35%] p-4 flex items-center justify-start"
          >
            <span className="lg:text-xl">
              <item.icon />
            </span>
            <span className="lg:text-xl">{item.text}</span>
          </div>
        ))}
      </div>
      <div className=" lg:w-[70%] flex justify-end items-center">
        <img src={Screens} className="w-[900px]" />
      </div>
    </div>
  );
};

export default CollectionBox;
