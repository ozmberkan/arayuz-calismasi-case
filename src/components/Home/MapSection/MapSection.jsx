import Chart from "~/assets/Map/chart.png";
import Picture from "~/assets/Map/picture.png";

const MapSection = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#78350F] relative">
      <div className="relative">
        <img src={Chart} />
        <div className="w-6 h-6 rounded-full border-[3px] border-[#A3E635] absolute z-0 top-48 right-24"></div>
        <div className="w-6 h-6 rounded-full border-[3px] border-[#A3E635] absolute z-0 bottom-48 left-72"></div>
      </div>
      <div className="absolute flex flex-col items-center justify-center">
        <h1 className="text-[96px] font-extrabold text-white">11,658,467</h1>
        <p className="text-white text-[56px] font-extrabold">Shoes Collected</p>
      </div>
      <div className="absolute left-[430px] top-24 flex flex-col items-center">
        <img src={Picture} className="z-20" />

        <div className=" bg-gray-200 w-full rounded-md p-3 -bottom-5 absolute z-10">
          Emma Simpson collected one pair of <strong>Cool Shoes.</strong>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-gray-200"></div>
        </div>

        <div className="w-6 h-6 rounded-full border-[3px] border-[#A3E635] bg-[#D9F99D]/80 absolute -bottom-10 z-0"></div>
      </div>
    </div>
  );
};

export default MapSection;
