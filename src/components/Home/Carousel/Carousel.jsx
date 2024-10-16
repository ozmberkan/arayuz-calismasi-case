import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Zoomer from "~/components/Home/Carousel/children/Zoomer";
import Sheels from "~/components/Home/Carousel/children/Sheels";
import ArtVenue from "~/components/Home/Carousel/children/ArtVenue";
import Waves from "./children/Waves";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Carousel = () => {
  const sliderRef = useRef(null);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: isTabletOrMobile ? 1 : 3,
    speed: 3000,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
  };

  return (
    <div className="w-full h-screen flex justify-start items-center flex-col bg-[#FFFBEB] lg:py-20 lg:px-10 py-12 gap-y-10">
      <div className="w-full flex justify-between items-center lg:px-10 px-4">
        <h1 className="text-colorPrimaryBlack font-extrabold text-[32px] lg:text-left text-center lg:w-auto w-full lg:text-[56px]">
          Because they love us
        </h1>
        <div className="lg:flex gap-x-6 hidden ">
          <span
            className="text-[50px] text-colorPrimaryBrown cursor-pointer hover:text-colorPrimaryBrown/75"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <FiArrowLeftCircle />
          </span>

          <span
            className="text-[50px] text-colorPrimaryBrown cursor-pointer hover:text-colorPrimaryBrown/75"
            onClick={() => sliderRef.current.slickNext()}
          >
            <FiArrowRightCircle />
          </span>
        </div>
      </div>
      <div className="w-full bg-[#FDE68A] h-[420px] relative">
        <div className="mt-10 w-full">
          <Slider ref={sliderRef} {...settings}>
            <div className="p-4 flex flex-col h-[430px] space-x-4">
              <Zoomer />
            </div>
            <div className="p-4 flex-col h-[430px] justify-between items-start flex">
              <Sheels />
            </div>
            <div className="p-4 flex-col h-[430px] justify-between items-start flex">
              <ArtVenue />
            </div>
            <div className="p-4 flex-col h-[430px] justify-between items-start flex">
              <Waves />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
