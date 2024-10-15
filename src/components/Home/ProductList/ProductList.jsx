import { Link } from "react-router-dom";
import { ProductListCards } from "~/data/data";
import Backlights from "~/assets/ProductList/Backlights.png";
import Card from "./children/Card";

const ProductList = () => {
  return (
    <div className="w-full bg-colorPrimaryBlack flex flex-col gap-y-12 p-20 h-screen">
      <div className="w-full flex justify-between items-center ">
        <h1 className="text-white font-extrabold text-[56px] flex-1">
          The best of the best
        </h1>
        <Link className="px-6 py-5 border-2 text-white border-wih  text-2xl font-bold rounded-lg">
          Sign up now
        </Link>
      </div>
      <div className="w-full  relative h-full">
        <img
          src={Backlights}
          className="absolute top-5 left-12 w-full h-full z-10"
        />
        <div className="relative z-10 grid grid-cols-3 gap-12">
          {ProductListCards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
