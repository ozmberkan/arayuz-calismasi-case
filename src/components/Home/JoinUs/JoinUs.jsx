import JoinUsText from "./children/JoinUsText";
import JoinUsImages from "./children/JoinUsImages";

const JoinUs = () => {
  return (
    <div className="flex w-full h-screen px-20 py-40 bg-[#FFFBEB]">
      <div className="w-full bg-white rounded-xl joinUsBoxShadow p-20 flex">
        <JoinUsText />
        <JoinUsImages />
      </div>
    </div>
  );
};

export default JoinUs;
