import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-y-5">
      <h1 className="text-[56px] font-extrabold text-colorPrimaryBlack">404</h1>
      <Link
        to="/"
        className="text-[56px] text-colorPrimaryBrown font-black hover:text-colorPrimaryBrown/75"
      >
        Anasayfa
      </Link>
    </div>
  );
};

export default NotFound;
