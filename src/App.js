import { useState } from "react";
import Navbar from "./components/Navbar"
import SidebarDashboard from "./components/SidebarDashboard";

export default function App() {
  const [sidebarCollapse,setSidebarCollapse] = useState(false);

  const handleToggleSidebar  = ()=>{
    setSidebarCollapse(!sidebarCollapse);
  }

  return (
    <>
      <div className="flex">
        <div className="sidebarDiv">
          <SidebarDashboard collapsed={sidebarCollapse}/>
        </div>
        <div className="content w-full">
          <div className="navbarDiv px-3 py-5 bg-zinc-100">
            <Navbar isToggleBtn  ={handleToggleSidebar }/>
          </div>
        </div>
      </div>
    </>
  )
}
