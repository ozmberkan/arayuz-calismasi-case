const Box = ({ section }) => {
  const { icon, piece, title, description } = section;

  return (
    <div className="h-[205px] w-full flex flex-col gap-y-4 ">
      <div className="w-full h-16 flex items-center lg:justify-start relative flex-1 lg:flex-row flex-col justify-center ">
        <img src={icon} className="z-10 relative" />
        <img src={piece} className="absolute top-0 left-44 lg:left-6 z-0" />
      </div>
      <div className="w-full flex-0 flex flex-col justify-center items-center lg:justify-start lg:items-start">
        <span className="text-colorPrimaryBlack text-xl font-medium">
          {title}
        </span>
      </div>
      <div className="w-full flex-1 flex flex-col justify-center items-center">
        <span className="text-colorPrimaryBlack text-lg font-normal lg:text-left text-center">
          {description}
        </span>
      </div>
    </div>
  );
};

export default Box;
