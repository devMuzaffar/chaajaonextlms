"use client";

import NewsAdsList from "./components/NewsAdsList";

const NewsAds = () => {
  return (
    <div className="px-4 py-10 flex flex-col gap-6">

      {/* Title */}
      <div className="font-semibold text-2xl">
        <h2>News And Ads</h2>
      </div>

      {/* List of News-Ads */}
      <NewsAdsList />
    </div>
  );
};

export default NewsAds;
