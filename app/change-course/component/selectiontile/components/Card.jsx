"use client";

const Card = ({ icon, title, desc, isSelected, onClick }) => {
  const borderColor = isSelected ? "border-primary" : "border-slate-200";
  const tickAppearance = isSelected ? "block" : "hidden";

  const handleSelection = () => {
    onClick();
  };

  return (
    <div
      className={`font-semibold bg-white border-2 ${borderColor} relative rounded-lg flex flex-col items-center text-center gap-3 px-4 py-10`}
      onClick={handleSelection}
    >
      <img className="w-12" src={icon} alt="" />
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-sm">{desc}</p>

      <img
        className={`absolute -right-4 -top-4 ${tickAppearance}`}
        src="./assets/change-course/selected.png"
        alt=""
      />
    </div>
  );
};

export default Card;
