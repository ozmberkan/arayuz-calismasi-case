import { Link } from "react-router-dom";
import { navTabs } from "~/data/data";
import { useMediaQuery } from "react-responsive";
import { TbMenuDeep } from "react-icons/tb";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Navbar = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      {!isTabletOrMobile ? (
        <div className="w-full flex justify-between items-center h-24 px-20 py-6 z-10">
          <Link
            to="/"
            className="text-[32px] text-primaryBrown text-colorPrimaryBrown font-bold"
          >
            Collers
          </Link>
          <div className="flex gap-x-4 items-center">
            {navTabs.map((tab) => (
              <Link
                to="/"
                className={`font-medium text-base text-colorPrimaryBrown hover:text-colorPrimaryBrown/70 transition-colors duration-150 ${
                  tab.id === 6
                    ? "border-2 rounded-lg p-3 border-colorPrimaryBrown hover:border-colorPrimaryBrown/70 flex justify-center items-center"
                    : "border-none"
                }`}
                key={tab.id}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-between items-center p-4 ">
          <Link
            to="/"
            className="text-[32px] text-primaryBrown text-colorPrimaryBrown font-bold"
          >
            Collers
          </Link>
          <button
            onClick={() => setIsOpen(true)}
            className="text-3xl text-colorPrimaryBrown"
          >
            <TbMenuDeep />
          </button>
        </div>
      )}
      <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
        <div className="flex gap-x-4 items-start justify-between gap-y-5 flex-col p-5 w-full  ">
          {navTabs.map((tab) => (
            <Link
              to="/"
              className={`font-medium text-base text-colorPrimaryBrown hover:text-colorPrimaryBrown/70 transition-colors duration-150 ${
                tab.id === 6
                  ? "border-2 rounded-lg p-3 border-colorPrimaryBrown hover:border-colorPrimaryBrown/70 flex justify-center items-center"
                  : "border-none"
              }`}
              key={tab.id}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
