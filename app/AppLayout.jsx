"use client";
import { useEffect, useState } from "react";
import { Sidebar, Header } from "./components";
import SidebarProvider from "./context/SidebarContext";
import Loading from "./components/loaders/Loading";
import PageWrapper from "./components/wrappers/PageWrapper";

// <SidebarProvider> for Show/Hide sidebar from both Sidebar & Header Component

// Main Component - Renders Whole UI
const MainComponent = ({ children }) => (
  <SidebarProvider>
    <Sidebar />
    <div className="w-full md:w-[calc(100vw-5vw)] overflow-y-auto">
      <Header />
      {/* Dynamic Pages */}
      <PageWrapper>{children}</PageWrapper>
    </div>
  </SidebarProvider>
);


const AppLayout = ({ children }) => {
  const [isFirstTime, setIsFirstTime] = useState(true);

  // Loading Timer
  useEffect(() => {
    setTimeout(setIsFirstTime(false), 2000);
  }, []);

  return (
    <div className="app flex justify-end relative bg-contentbg overflow-x-hidden">
      {isFirstTime ? <Loading /> : <MainComponent>{children}</MainComponent>}
    </div>
  );
};

export default AppLayout;
