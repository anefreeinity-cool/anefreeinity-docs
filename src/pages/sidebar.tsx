import Tree from "../components/Tree/tree";

const SideBar: React.FC = () => {
  return (
    <div 
    className="h-full overflow-auto ">
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
