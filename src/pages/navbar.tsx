interface INavBarProps {
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<INavBarProps> = ({ setDrawerOpen }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="h-[63%] bg-slate-800">
        <div className="flex flex-row h-full">
          <img
            className="w-12 h-12 m-2"
            src="/public/assets/Anefreeinity-doc-logo-removebg-preview.png"
            alt="logo"
          ></img>
        </div>
      </div>
      <div className="h-[37%] bg-slate-900">
        <button
          className="p-3 ml-2 my-auto bg-gray-700 rounded-xl n"
          onClick={() => setDrawerOpen((prev) => !prev)}
        ></button>
      </div>
    </div>
  );
};

export default NavBar;
