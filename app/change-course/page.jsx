import Button from "./component/button/Button";
import CircleText from "./component/circletext/CircleText";
import ConnectedLine from "./component/connectedline/ConnectedLine";
import SelectionTile from "./component/selectiontile/SelectionTile";

const ChangeCourse = () => {
  return (
    <div className="py-24 px-4">
      {/* Selection Dots */}
      <div className="pb-8">
        {/* 1 - 2 - 3 */}
        <div className="flex items-center gap-3">
          <CircleText>1</CircleText>
          <ConnectedLine />
          <CircleText>2</CircleText>
          <ConnectedLine />
          <CircleText>3</CircleText>
        </div>
      </div>

      {/* Choose Your Course */}
      <div className="flex flex-col gap-10">
        {/* Title */}
        <div className="text-3xl font-bold text-slate-800">
          <h2>Choose your Course</h2>
        </div>

        {/* Selection Tile */}
        <SelectionTile />

        {/* Next - Prev Buttons */}
        <div className="flex flex-wrap gap-5 justify-between items-center">
          <Button isDisabled={true}>Back</Button>
          <Button>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default ChangeCourse;
