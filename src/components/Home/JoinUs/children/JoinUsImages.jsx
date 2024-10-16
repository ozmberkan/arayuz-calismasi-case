import Desktop from "~/assets/JoinUs/Desktop.png";
import Yellow from "~/assets/JoinUs/Yellow.svg";
import Pink from "~/assets/JoinUs/Pink.svg";
import Green from "~/assets/JoinUs/Green.svg";
import Purple from "~/assets/JoinUs/Purple.svg";
import Brown from "~/assets/JoinUs/Brown.svg";
import Blue from "~/assets/JoinUs/Blue.svg";

const JoinUsImages = () => {
  return (
    <div className="flex-1 flex items-center justify-center relative ">
      <img
        src={Yellow}
        className="absolute drop-shadow-2xl lg:w-[1300px]"
        alt="Yellow Decoration"
      />
      <img
        src={Purple}
        className="absolute drop-shadow-2xl lg:-bottom-12 lg:right-32 bottom-12 right-32"
        alt="Purple Decoration"
      />
      <img
        src={Brown}
        className="absolute drop-shadow-2xl lg:top-12 lg:left-0 top-12 left-0"
        alt="Brown Decoration"
      />
      <img
        src={Pink}
        className="absolute drop-shadow-2xl lg:-bottom-24 lg:-right-12 -bottom-6 -right-5"
        alt="Pink Decoration"
      />
      <img
        src={Desktop}
        className="w-full object-cover drop-shadow-2xl"
        alt="Desktop"
      />
      <img
        src={Blue}
        className="absolute lg:-top-24 lg:right-24 top-2 right-5"
        alt="Blue Decoration"
      />
      <img
        src={Green}
        className="absolute drop-shadow-2xl lg:-bottom-12 lg:left-24 bottom-6 left-5"
        alt="Green Decoration"
      />
    </div>
  );
};

export default JoinUsImages;
