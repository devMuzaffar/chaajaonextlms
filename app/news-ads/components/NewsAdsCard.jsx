import React from "react";

const NewsAdsCard = ({ img, title, text }) => {
  return (
    <div className="border-2 border-white bg-white cursor-pointer rounded-lg shadow-sm flex flex-col overflow-hidden h-fit">
      {/* Image */}
      <div className="h-72">
        <img className="object-cover h-full w-full" src={img} alt="" />
      </div>

      {/* Text Section */}
      <div className="flex flex-col font-semibold gap-2 p-4">
        <h3 className="text-sm">{title}</h3>
        <p className="text-xs">{text}</p>
      </div>
    </div>
  );
};

export default NewsAdsCard;
