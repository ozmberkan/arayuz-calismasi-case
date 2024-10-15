import { Link } from "react-router-dom";
import { navTabs } from "~/data/data";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center h-24 px-20 py-6">
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
  );
};

export default Navbar;
