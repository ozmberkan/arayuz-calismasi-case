const Box = ({ section }) => {
  const { icon, piece, title, description } = section;

  return (
    <div className="h-[205px] w-full flex flex-col gap-y-4">
      <div className="w-full h-16 flex items-center justify-start relative flex-1">
        <img src={icon} className="z-10 relative" />
        <img src={piece} className="absolute top-0 left-6 z-0" />
      </div>
      <div className="w-full flex-0 ">
        <span className="text-colorPrimaryBlack text-xl font-medium">
          {title}
        </span>
      </div>
      <div className="w-full flex-1">
        <span className="text-colorPrimaryBlack text-lg font-normal">
          {description}
        </span>
      </div>
    </div>
  );
};

export default Box;
