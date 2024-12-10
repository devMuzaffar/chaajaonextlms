const CircleText = ({children}) => {
  return (
    <div className="p-1 flex items-center justify-center border-2 border-secondary rounded-full">
      <div className="w-full bg-secondary rounded-full text-white flex justify-center items-center p-4 relative inset-0">
        <p className="absolute text-sm">{children}</p>
      </div>
    </div>
  );
};

export default CircleText;
