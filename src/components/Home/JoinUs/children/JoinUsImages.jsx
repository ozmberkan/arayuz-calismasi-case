import Desktop from "~/assets/JoinUs/Desktop.png";
import Yellow from "~/assets/JoinUs/Yellow.svg";
import Pink from "~/assets/JoinUs/Pink.svg";
import Green from "~/assets/JoinUs/Green.svg";
import Purple from "~/assets/JoinUs/Purple.svg";
import Brown from "~/assets/JoinUs/Brown.svg";
import Blue from "~/assets/JoinUs/Blue.svg";

const JoinUsImages = () => {
  return (
    <div className="flex-1 flex items-center justify-center relative">
      <img
        src={Yellow}
        className="absolute drop-shadow-2xl w-[1300px]"
        alt="Yellow Decoration"
      />
      <img
        src={Purple}
        className="absolute drop-shadow-2xl -bottom-12 right-32"
        alt="Purple Decoration"
      />
      <img
        src={Brown}
        className="absolute drop-shadow-2xl top-12 left-0"
        alt="Brown Decoration"
      />
      <img
        src={Pink}
        className="absolute drop-shadow-2xl -bottom-24 -right-12"
        alt="Pink Decoration"
      />
      <img
        src={Desktop}
        className="w-full object-cover drop-shadow-2xl"
        alt="Desktop"
      />
      <img
        src={Blue}
        className="absolute -top-24 right-24"
        alt="Blue Decoration"
      />
      <img
        src={Green}
        className="absolute drop-shadow-2xl -bottom-12 left-24"
        alt="Green Decoration"
      />
    </div>
  );
};

export default JoinUsImages;
