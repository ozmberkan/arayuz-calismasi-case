import JoinUsText from "./children/JoinUsText";
import JoinUsImages from "./children/JoinUsImages";

const JoinUs = () => {
  return (
    <div className="flex w-full h-screen lg:px-20 lg:py-40 px-4 pt-4 mb-14 bg-[#FFFBEB]">
      <div className="w-full bg-white rounded-xl joinUsBoxShadow lg:p-20 py-8 px-4 flex lg:flex-row flex-col">
        <JoinUsText />
        <JoinUsImages />
      </div>
    </div>
  );
};

export default JoinUs;
