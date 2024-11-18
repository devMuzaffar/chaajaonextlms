"use client";
import {
    Sidebar
} from './components';
import SidebarProvider from './context/SidebarContext';

// Sidebar with Provider Wrapped
const SideBar = () => <SidebarProvider><Sidebar /></SidebarProvider>;

const App = () => {
  return (
    <div className='app flex relative'>
        <SideBar />
        <div className='flex-1 border-2 bg-white border-red-500'>Dummy Block</div>
    </div>
  )
}

export default App