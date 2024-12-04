const Button = ({ imgSrc, text, onClick, className }) => {

  // onClick Event
  const triggerAction = () => {
    onClick();
  }

  return (
    <div className={`cursor-pointer bg-white flex py-3 px-7 gap-4 rounded-xl shadow-header-button ${className}`} onClick={triggerAction}>
      <img src={imgSrc} className="w-5" alt="" />
      <p className="text-slate-600 text-sm truncate">{text}</p>
    </div>
  );
};

export default Button;
