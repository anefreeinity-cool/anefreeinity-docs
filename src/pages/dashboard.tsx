import { useState } from "react";
import DASHBOARD_CONFIG from "./defaults/dashboard.config";
import Footer from "./footer";
import NavBar from "./navbar/navbar";
import SideBar from "./sidebar";
import "./style/dashboard.style.css";
import { Outlet } from "react-router-dom";

const DashBoard: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div role="body" className="container bg-slate-800 text-gray-200">
      <nav className={`z-10 ${DASHBOARD_CONFIG.navHeight.class}`}>
        <NavBar setDrawerOpen={setIsDrawerOpen} />
      </nav>
      <aside className={`overflow-hidden ${isDrawerOpen ? "show" : "hide"}`}>
        <SideBar />
      </aside>
      <main>
        <Outlet />
      </main>
      <footer className="w-screen z-20 h-24 bg-gray-900">
        <Footer />
      </footer>
    </div>
  );
};

export default DashBoard;
