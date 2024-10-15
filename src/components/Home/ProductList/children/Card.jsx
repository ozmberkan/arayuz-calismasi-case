import { RiShoppingCartLine } from "react-icons/ri";

const Card = ({ card }) => {
  const { image, title, description } = card;

  return (
    <div className="flex flex-col bg-colorPrimaryBlack cardShadow rounded-[10px]">
      <img
        src={image}
        className="w-full object-cover flex-2 rounded-t-[10px]"
      />
      <div className=" flex-1 p-8 flex-col flex gap-y-4">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <p className="text-white">{description}</p>
      </div>

      <div className="w-full p-8">
        <button className="border-2 flex gap-x-2 border-white w-full justify-center items-center py-4 rounded-lg text-white text-[20px] font-medium">
          <RiShoppingCartLine className="text-xl" />
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Card;
