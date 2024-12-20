import MotionWrap from "../animations/MotionWrap";
import { Suspense } from "react";
import Loading from "@/app/loading";

const PageWrapper = ({ children }) => {
  return (
    <Suspense fallback={<Loading />}>
      <MotionWrap>{children}</MotionWrap>
    </Suspense>
  );
};

export default PageWrapper;
