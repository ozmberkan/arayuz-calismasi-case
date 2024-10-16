import Box from "./Box";
import { HeroSections } from "~/data/data";

const BottomHero = () => {
  return (
    <div className="w-full  lg:h-[330px] grid grid-cols-1 lg:grid-cols-3 place-items-center gap-8 lg:gap-20 py-12 px-4 lg:p-0 lg:py-0">
      {HeroSections.map((section) => (
        <Box key={section.id} section={section} />
      ))}
    </div>
  );
};

export default BottomHero;
