//
// Main Component - Renders Whole UI
//

import { useState } from "react";
import { Header, Notification, Sidebar } from "../index";
import SidebarProvider from "@/app/context/SidebarContext";
import PageWrapper from "../wrappers/PageWrapper";
import useDelay from "@/app/utils/helpers/useDelay";

// <SidebarProvider> for Show/Hide sidebar from both Sidebar & Header Component
// <PageWrapper> Wraps Child Component with (Loading + Animation)

const MainComponent = ({ children }) => {
  // Notification State
  const [isOpen, setIsOpen] = useState(false);

  // Dummy Delay for Notification
  useDelay(() => {setIsOpen(true)}, 2000);

  return (
    <SidebarProvider>

      {/* Notification */}
      <Notification
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        message="Admin Mode"
        time={5000}
      />


      {/* Main UI */}
      <Sidebar />
      <div
        className={`w-full md:w-[calc(100vw-5vw)] overflow-y-auto overflow-x-hidden`}
      >
        <Header />
        {/* Dynamic Pages */}
        <PageWrapper>{children}</PageWrapper>
      </div>
    </SidebarProvider>
  );
};

export default MainComponent;
