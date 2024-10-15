import Hero from "~/components/Home/Hero/Hero";
import ProductList from "~/components/Home/ProductList/ProductList";
import JoinUs from "~/components/Home/JoinUs/JoinUs";
import Carousel from "~/components/Home/Carousel/Carousel";
import Collection from "~/components/Home/Collection/Collection";
import MapSection from "~/components/Home/MapSection/MapSection";

const Home = () => {
  return (
    <div className="flex flex-col flex-grow">
      <Hero />
      <ProductList />
      <JoinUs />
      {/* <Carousel /> */}
      {/* <Collection /> */}
      {/* <MapSection /> */}
    </div>
  );
};

export default Home;
