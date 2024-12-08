import newsAdsList from "../list/newsAdsList";
import NewsAdsCard from "./NewsAdsCard";

const NewsAdsList = () => {
  return (
    <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
      {newsAdsList.map(({ img, title, text }, index) => (
        <NewsAdsCard key={index} img={img} title={title} text={text} />
      ))}
    </div>
  );
};

export default NewsAdsList;
