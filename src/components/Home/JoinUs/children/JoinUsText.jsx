import { Link } from "react-router-dom";
import { JoinUsTextData } from "~/data/data";

const JoinUsText = () => {
  return (
    <div className="flex-1 w-full lg:pr-20 lg:py-[38px] ">
      <div className="w-full lg:pr-20 p-4 h-full flex flex-col gap-y-6 items-center justify-center lg:justify-start lg:items-start">
        <h1 className="lg:text-[56px] text-[32px] font-extrabold">
          Why join us
        </h1>
        <div className="flex gap-y-2 flex-col">
          {JoinUsTextData.map((item) => (
            <span
              key={item.id}
              className="flex items-center gap-x-2 text-base lg:text-xl text-colorPrimaryBlack"
            >
              <item.icon className="text-colorCheck" /> {item.text}
            </span>
          ))}
        </div>
        <div className="w-full flex lg:justify-start justify-center items-center">
          <Link className="border-2 w-1/2 rounded-lg p-3 border-colorPrimaryBrown hover:border-colorPrimaryBrown/70 flex justify-center items-center font-medium text-base text-colorPrimaryBrown hover:text-colorPrimaryBrown/70 transition-colors duration-150">
            Sign up now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinUsText;
