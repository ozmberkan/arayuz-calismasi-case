import ZoomerIcon from "~/assets/Carousel/Zoomer.svg";
import ZoomerUser from "~/assets/Carousel/ZoomerUser.png";

const Zoomer = () => {
  return (
    <div className="bg-white w-full h-full p-6 flex flex-col justify-between gap-y-8 rounded-[20px] shadow-md">
      <div className="w-full  flex items-center gap-x-2 py-4">
        <img src={ZoomerIcon} />
        <span className="text-colorCompany font-bold text-2xl">Zoomer</span>
      </div>
      <p className="lg:text-2xl text-base font-normal text-black">
        Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus,
        viverra turpis lorem. Varius a turpis urna id porttitor.
      </p>
      <div className="flex gap-x-4 items-center">
        <img src={ZoomerUser} />
        <div>
          <h1 className="text-black font-normal lg:text-lg">Hellen Jummy</h1>
          <span className="text-colorCompany text-base font-normal">
            Team Lead
          </span>
        </div>
      </div>
    </div>
  );
};

export default Zoomer;
