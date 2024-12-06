import quickLinksList from "@/app/list/quickLinks";
import QuickLinkButton from "../shared/QuickLinkButton";
import SubTitle from "../shared/SubTitle";
import Title from "../shared/Title";
import ViewAllButton from "../shared/ViewAllButton";
import blockStyle from "./style/blockStyle";

const Block1 = () => {
  return (
    <div className={blockStyle}>

        {/* Title */}
        <Title>Practice Zone</Title>

        {/* Content */}
        <div className="flex justify-between flex-col gap-8 md:flex-row">

          {/* Quick Links */}
          <div className="flex flex-col gap-2">
            <SubTitle>Quick Links</SubTitle>
            <div className="flex flex-col gap-3">
              {quickLinksList.map(({icon, text, desc}, index) => (
                <QuickLinkButton
                    key={index}
                    icon={icon}
                    text={text}
                    desc={desc}
                    textClass="text-sm"
                    descClass="text-[9px]"
                />
              ))}
            </div>
          </div>

          {/* Recent-Test Results */}
          <div className="flex flex-col gap-3">
            <SubTitle>
              <p>Recent Test Results</p>
              <ViewAllButton />
            </SubTitle>
            <div>
              <p className="text-xs text-slate-500">No Recent Tests found</p>
            </div>
          </div>
          
        </div>
      </div>
  )
}

export default Block1