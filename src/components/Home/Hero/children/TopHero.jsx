import { Link } from "react-router-dom";
import { HiOutlinePlayCircle } from "react-icons/hi2";
import Shoe from "~/assets/Hero/Shoe.png";
import { useMediaQuery } from "react-responsive";

const TopHero = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div className="lg:h-[500px] w-full flex  flex-col lg:flex-row items-center justify-center lg:py-20 py-12 px-4">
      <div className="lg:min-w-[900px] w-full  h-full flex lg:items-start lg:justify-start items-center justify-center flex-col  gap-y-8">
        <h1 className="font-extrabold text-[56px] lg:text-[72px] text-colorPrimaryBlack text-center lg:text-left">
          Collectible Sneakers
        </h1>
        <p className="font-normal text-lg lg:text-left text-center">
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

      {!isTabletOrMobile ? (
        <div className="w-full bg-pink-500 flex items-center justify-end relative">
          <span className="bg-colorHeroShoeBg rounded-[50px] absolute right-12 z-0 lg:w-[380px] lg:h-[372px]" />
          <img src={Shoe} className="absolute lg:min-w-[500px] z-10" />
        </div>
      ) : (
        <div className="w-full   h-[350px] mt-8 p-6 relative">
          <img src={Shoe} className="absolute inset-0 z-10" />
          <div className="bg-colorHeroShoeBg w-full h-full rounded-[50px]"></div>
        </div>
      )}
    </div>
  );
};

export default TopHero;
