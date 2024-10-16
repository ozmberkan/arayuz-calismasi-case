import Box from "./Box";
import { HeroSections } from "~/data/data";

const BottomHero = () => {
  return (
    <div className="w-full  h-[300px] grid grid-cols-3 place-items-center gap-20">
      {HeroSections.map((section) => (
        <Box key={section.id} section={section} />
      ))}
    </div>
  );
};

export default BottomHero;
