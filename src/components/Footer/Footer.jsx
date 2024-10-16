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
import { menuItems } from "~/data/data";

const Footer = () => {
  return (
    <footer className="bg-colorPrimaryBlack h-[500px] px-20">
      <div className="w-full py-12 grid grid-cols-4 gap-12">
        {menuItems.map((item, index) => (
          <div key={index} className="flex flex-col text-white">
            <h1 className="py-3 font-medium">{item.title}</h1>
            {item.links.map((link, idx) => (
              <span key={idx} className="py-3">
                {link}
              </span>
            ))}
          </div>
        ))}

        <div className="flex flex-col text-white gap-y-2">
          <h1 className="py-3 font-medium">Get the App</h1>
          <img
            src={AppStore}
            alt="Download on the App Store"
            className="w-44"
          />
          <img src={GooglePlay} alt="Get it on Google Play" className="w-44" />
          <span className="py-3">Follow Us</span>
          <div className="flex gap-x-2 text-white text-xl">
            <FaYoutube aria-label="YouTube" />
            <FaFacebook aria-label="Facebook" />
            <FaTwitter aria-label="Twitter" />
            <FaInstagram aria-label="Instagram" />
            <FaLinkedin aria-label="LinkedIn" />
          </div>
        </div>
      </div>

      <div className="w-full h-24 flex justify-between items-center border-t border-[#334155]">
        <span className="text-base font-normal text-[#E2E8F0]">
          Collers © 2023. All rights reserved.
        </span>
        <div className="flex gap-x-8 text-[#E2E8F0]">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Contact</span>
          <p className="flex gap-x-2 items-center">
            <FaGlobe aria-label="Language" />
            <span>EN</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
