import { Block1, Block2, Block3, Block4, BottomLinks } from "./home";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 py-10 md:grid-cols-2">
      {/* Practice Zone Block */}
      <Block1 />

      {/* Recorded Lectures Block */}
      <Block2 />

      {/* Bookmark Block */}
      <Block3 />

      {/* Chaajao Corner */}
      <Block4 />

      {/* Links Block */}
      <BottomLinks />
    </div>
  );
};

export default HomePage;
