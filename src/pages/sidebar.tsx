import Tree from "../components/Tree/tree";

const SideBar: React.FC = () => {
  return (
    <div className="h-full overflow-auto bg-slate-850">
      {/* {Array.from({ length: 20 }, (_, i) => (
        <div key={i} className="p-2 mx-4 rounded-lg my-4 bg-slate-700">
          I am good
        </div>
      ))} */}
      <Tree />
    </div>
  );
};

export default SideBar;
