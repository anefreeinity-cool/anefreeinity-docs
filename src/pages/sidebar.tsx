import Tree from "../components/Tree/tree";
import { useMobileView } from "../store/utilities.store";
import "./style/scroll-bar.style.css";

const SideBar: React.FC = () => {
  const isMobileView = useMobileView();

  return (
    <div
      className={` ${
        isMobileView ? "" : "custom-scrollbar"
      } bg-slate-850 h-full overflow-auto `}
    >
      <Tree />
      <ul>
        {Array.from({ length: 100 }, (_, i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
