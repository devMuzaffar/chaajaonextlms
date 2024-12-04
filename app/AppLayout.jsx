"use client";
import { Sidebar, Header } from "./components";
import SidebarProvider from "./context/SidebarContext";

// SidebarProvider for Show/Hide sidebar from both Sidebar & Header Component

const AppLayout = ({ children }) => {
  return (
    <div className="app flex relative">
      <SidebarProvider>
        <Sidebar />

        <div className="flex-1 bg-contentbg border-2 border-red-500">
          <Header />

          {/* Dynamic Pages */}
          {children}
        </div>
      </SidebarProvider>
    </div>
  );
};

export default AppLayout;
