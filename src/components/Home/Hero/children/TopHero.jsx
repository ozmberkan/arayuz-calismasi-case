import { Link } from "react-router-dom";
import Shoe from "~/assets/Hero/Shoe.png";
import { HiOutlinePlayCircle } from "react-icons/hi2";

const TopHero = () => {
  return (
    <div className="h-[500px] w-full  flex items-center justify-center py-20">
      <div className="min-w-[900px]  h-full flex items-start justify-start flex-col gap-y-8">
        <h1 className="font-extrabold text-[72px] text-colorPrimaryBlack">
          Collectible Sneakers
        </h1>
        <p className="font-normal text-lg">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet.
        </p>
        <div className="flex items-center gap-x-4">
          <Link className="border-2 rounded-lg p-3 border-colorPrimaryBrown hover:border-colorPrimaryBrown/70 flex justify-center items-center font-medium text-base text-colorPrimaryBrown hover:text-colorPrimaryBrown/70 transition-colors duration-150">
            Sign up now
          </Link>
          <Link className="text-colorPrimaryBrown text-base font-medium flex items-center gap-x-2 ">
            <span className="text-xl">
              <HiOutlinePlayCircle />
            </span>
            Watch demo
          </Link>
        </div>
      </div>
      <div className="w-full bg-pink-500 flex items-center justify-end relative">
        <span className="bg-colorHeroShoeBg rounded-[50px] absolute  right-12 z-0 w-[380px] h-[372px]" />
        <img src={Shoe} className="absolute min-w-[500px] z-10" />
      </div>
    </div>
  );
};

export default TopHero;
