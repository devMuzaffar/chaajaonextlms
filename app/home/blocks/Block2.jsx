import SubTitle from "../shared/SubTitle";
import Title from "../shared/Title";
import ViewAllButton from "../shared/ViewAllButton";
import blockStyle from "./style/blockStyle";

const Block2 = () => {
  return (
    <div className={blockStyle}>

        {/* Title */}
        <Title>Recorded Lectures</Title>

        {/* Content */}
        <div className="flex justify-between flex-col gap-8 md:flex-row">

          {/* Quick Links */}
          <div className="flex flex-col gap-2">
          <SubTitle>
              <p>Recent Viewed Videos</p>
              <ViewAllButton />
            </SubTitle>
            <div>
              <p className="text-xs text-slate-500">No Recent Viewed Videos Found</p>
            </div>
          </div>

          {/* Recent-Test Results */}
          <div className="flex flex-col gap-3">
            <SubTitle>
              <p>Course Progress</p>
              <ViewAllButton />
            </SubTitle>
            <div>
              <p className="text-xs text-slate-500">No Coursee Progress Found</p>
            </div>
          </div>

        </div>
      </div>
  )
}

export default Block2