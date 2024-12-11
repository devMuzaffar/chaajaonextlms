"use client";
import { Sidebar, Header } from "./components";
import SidebarProvider from "./context/SidebarContext";

// <SidebarProvider> for Show/Hide sidebar from both Sidebar & Header Component

const AppLayout = ({ children }) => {
  return (
    <div className="app flex justify-end relative bg-contentbg overflow-x-hidden">
      <SidebarProvider>
        <Sidebar />

        <div className="w-full md:w-[calc(100vw-5vw)] overflow-y-auto">
          <Header />

          {/* Dynamic Pages */}
          {children}

        </div>
      </SidebarProvider>
    </div>
  );
};

export default AppLayout;
