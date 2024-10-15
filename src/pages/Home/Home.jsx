import Carousel from "~/components/Home/Carousel";
import Collection from "~/components/Home/Collection";
import Hero from "~/components/Home/Hero";
import JoinUs from "~/components/Home/JoinUs";
import MapSection from "~/components/Home/MapSection";
import ProductList from "~/components/Home/ProductList";

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
