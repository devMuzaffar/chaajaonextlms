import bottomLinks from "@/app/list/bottomLinks";
import QuickLinkButton from "../shared/QuickLinkButton";

const BottomLinks = () => {
  return (
    <div className="md:col-span-2 grid sm:grid-cols-3 gap-4">
      {bottomLinks.map(({ icon, text }, index) => (
        <QuickLinkButton
          key={index}
          icon={icon}
          iconClass="!w-10"
          text={text}
          className="border-2 border-zinc-300"
          textClass="text-sm md:text-base"
        />
      ))}
    </div>
  );
};

export default BottomLinks;
