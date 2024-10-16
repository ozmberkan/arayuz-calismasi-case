import Waves from "~/assets/Collection/Waves.svg";
import CollectionText from "./children/CollectionText";
import CollectionBox from "./children/CollectionBox";

const Collection = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center relative lg:px-20 lg:pt-20 lg:pb-32 py-12 px-4">
      <img
        src={Waves}
        alt="Waves"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="w-full h-full z-10 flex flex-col gap-y-20">
        <CollectionText />
        <CollectionBox />
      </div>
    </div>
  );
};

export default Collection;
