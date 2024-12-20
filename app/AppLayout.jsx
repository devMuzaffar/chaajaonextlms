"use client";
import { useState } from "react";
import { Sidebar, Header } from "./components";
import SidebarProvider from "./context/SidebarContext";
import Loading from "./loading";
import PageWrapper from "./components/wrappers/PageWrapper";
import useDelay from "./utils/helpers/useDelay";

// <SidebarProvider> for Show/Hide sidebar from both Sidebar & Header Component
// <PageWrapper> Wraps Child Component with Loading + Animation

// Main Component - Renders Whole UI
const MainComponent = ({ children }) => (
  <SidebarProvider>
    <Sidebar />
    <div className="w-full md:w-[calc(100vw-5vw)] overflow-y-auto overflow-x-hidden">
      <Header />
      {/* Dynamic Pages */}
      <PageWrapper>{children}</PageWrapper>
    </div>
  </SidebarProvider>
);

const AppLayout = ({ children }) => {
  const [isFirstTime, setIsFirstTime] = useState(true);

  // Loading Timer
  useDelay(() => setIsFirstTime(false), 250);

  return (
    <div className="app flex justify-end relative bg-contentbg overflow-x-hidden">
      {isFirstTime ? (
        <Loading isMain={true} />
      ) : (
        <MainComponent>{children}</MainComponent>
      )}
    </div>
  );
};

export default AppLayout;
