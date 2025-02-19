import Body from "./body";
import DASHBOARD_CONFIG from "./defaults/dashboard.config";
import Footer from "./footer";
import NavBar from "./navbar";
import SideBar from "./sidebar";
import "./style/dashboard.style.css";

const DashBoard: React.FC = () => {
  return (
    <div role="body" className="container">
      <nav
        className={`border z-10 border-black ${DASHBOARD_CONFIG.navHeight.class} bg-pink-500`}
      >
        <NavBar />
      </nav>
      <aside className={`border bg-red-600 border-black overflow-hidden`}>
        <SideBar />
      </aside>
      <main className="border border-black">
        <Body />
      </main>
      <footer className="border w-screen z-20 h-24 border-black bg-gray-900">
        <Footer />
      </footer>
    </div>
  );
};

export default DashBoard;
