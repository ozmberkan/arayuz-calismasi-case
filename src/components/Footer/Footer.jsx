import GooglePlay from "~/assets/Footer/Google.png";
import AppStore from "~/assets/Footer/AppStore.png";
import {
  FaFacebook,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-colorPrimaryBlack h-[500px] px-20">
      <div className="w-full py-12 grid grid-cols-4 gap-12">
        <div className="flex flex-col text-white">
          <h1 className="py-3 font-medium">Product</h1>
          <span className="py-3">Pricing</span>
          <span className="py-3">Overview</span>
          <span className="py-3">Browse</span>
          <span className="py-3">Accessibility</span>
          <span className="py-3">Five</span>
        </div>
        <div className="flex flex-col text-white">
          <h1 className="py-3 font-medium">Product</h1>
          <span className="py-3">Pricing</span>
          <span className="py-3">Overview</span>
          <span className="py-3">Browse</span>
          <span className="py-3">Accessibility</span>
          <span className="py-3">Five</span>
        </div>
        <div className="flex flex-col text-white">
          <h1 className="py-3 font-medium">Product</h1>
          <span className="py-3">Pricing</span>
          <span className="py-3">Overview</span>
          <span className="py-3">Browse</span>
          <span className="py-3">Accessibility</span>
          <span className="py-3">Five</span>
        </div>
        <div className=" flex flex-col text-white gap-y-2">
          <h1 className="py-3 font-medium">Get the App</h1>
          <img src={AppStore} className="w-44" />
          <img src={GooglePlay} className="w-44" />
          <span className="py-3">Follow Us</span>
          <div className="flex gap-x-2 text-white text-xl">
            <FaYoutube />
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div className="w-full h-24  flex justify-between items-center border-t border-[#334155] ">
        <span className=" text-base font-normal text-[#E2E8F0]">
          Collers @ 2023. All rights reserved.
        </span>
        <div className="flex gap-x-8 text-[#E2E8F0]">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Contact</span>
          <p className="flex gap-x-2 items-center">
            <span>
              <FaGlobe />
            </span>
            <span>EN</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
