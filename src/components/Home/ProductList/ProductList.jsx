import { Link } from "react-router-dom";
import { ProductListCards } from "~/data/data";
import Backlights from "~/assets/ProductList/Backlights.png";
import Card from "./children/Card";

const ProductList = () => {
  return (
    <div className="w-full bg-colorPrimaryBlack flex flex-col gap-y-8 lg:gap-y-12 lg:px-20 lg:py-10 px-4 py-12 min-h-screen">
      <div className="w-full flex lg:justify-between items-center lg:flex-row flex-col gap-y-8 ">
        <h1 className="text-white font-extrabold  text-3xl lg:text-5xl flex-1 leading-tight lg:text-left text-center">
          The Best of the Best
        </h1>
        <Link
          to="/signup"
          className="px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-colorPrimaryBlack transition duration-300"
        >
          Sign Up Now
        </Link>
      </div>

      <div className="relative w-full h-full">
        <img
          src={Backlights}
          alt="Backlights"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProductListCards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
