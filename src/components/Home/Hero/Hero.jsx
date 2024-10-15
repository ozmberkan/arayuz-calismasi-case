import { Link } from "react-router-dom";
import heroBg from "~/assets/Hero/HeroBg.svg";
import Shoe from "~/assets/Hero/Shoe.png";

import { HiOutlinePlayCircle } from "react-icons/hi2";

const Hero = () => {
  return (
    <div className="flex-grow p-20 flex relative">
      <img src={heroBg} className="absolute bottom-0 right-0 -z-10" />
      <div className="z-10 w-full flex">
        <div className="flex-1  items-start justify-start flex bg-blue-500">
          <div className="flex flex-col gap-y-8">
            <h1 className="text-[72px] font-[800]">Collectible Sneakers</h1>
            <p>
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
              ultrices amet.
            </p>
            <div className="flex gap-x-4 text-colorPrimaryBrown items-center">
              <Link className="border-2 font-medium rounded-lg px-6 py-2 border-colorPrimaryBrown hover:border-colorPrimaryBrown/70 flex justify-center items-center">
                Sign up Now
              </Link>
              <Link className="flex items-center gap-x-2 font-medium">
                <span className="text-xl">
                  <HiOutlinePlayCircle />
                </span>
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
        <span className="flex-1 flex items-start justify-end bg-red-500">
          <div className="bg-colorHeroShoeBg rounded-[50px] w-[367px] h-[372px] flex justify-center items-center">
            <img src={Shoe} className="min-w-[486px] h-[388px] " />
          </div>
        </span>
      </div>
    </div>
  );
};

export default Hero;
