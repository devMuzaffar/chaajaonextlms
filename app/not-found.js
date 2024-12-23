import { MdWarningAmber } from "react-icons/md";

const ErrorPage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <MdWarningAmber className="text-secondary text-9xl" />
      <p className="text-lg md:text-2xl">Error - Page Not Found 😢</p>
    </div>
  );
};

export default ErrorPage;
