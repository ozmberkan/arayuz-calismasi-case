import BottomHero from "./children/BottomHero";
import TopHero from "./children/TopHero";
import heroBg from "~/assets/Hero/HeroBg.svg";

const Hero = () => {
  return (
    <div className="flex-grow flex flex-col px-20 relative">
      <img src={heroBg} className="bottom-0 absolute right-0 z-0" />
      <div className="z-10 flex-grow ">
        <TopHero />
        <BottomHero />
      </div>
    </div>
  );
};

export default Hero;
