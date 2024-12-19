const Button = ({ imgSrc, text, onClick, className }) => {
  // onClick Event
  // Triggers Menu by Element current Target
  const triggerAction = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <div>
      {/* Button */}
      <div
        className={`cursor-pointer select-none bg-white flex py-3 px-7 gap-4 rounded-xl shadow-header-button ${className}`}
        onClick={triggerAction}
      >
        <img src={imgSrc} className="w-5" alt="" />
        <p className="text-slate-600 text-sm truncate">{text}</p>
      </div>
    </div>
  );
};

export default Button;
