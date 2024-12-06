import Title from "../shared/Title";
import ViewAllButton from "../shared/ViewAllButton";
import blockStyle from "./style/blockStyle";

const Block3 = () => {
  return (
    <div className={blockStyle}>
      {/* Title */}
      <div className="flex justify-between">
        <Title>Bookmarks</Title>
        <ViewAllButton hasOutline={true} />
      </div>

      {/* Content */}
      <div className="flex justify-between flex-col gap-8 md:flex-row">
        <div>
          <p className="text-xs text-slate-500">No Bookmarks Available</p>
        </div>
      </div>
    </div>
  );
};

export default Block3;
