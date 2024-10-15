import Hero from "~/components/Home/Hero";
import ProductList from "~/components/Home/ProductList";
import JoinUs from "~/components/Home/JoinUs";
import Carousel from "~/components/Home/Carousel";
import Collection from "~/components/Home/Collection";
import MapSection from "~/components/Home/MapSection";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProductList />
      <JoinUs />
      <Carousel />
      <Collection />
      <MapSection />
    </div>
  );
};

export default Home;
