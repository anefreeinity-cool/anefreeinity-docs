import NavOption from "./nav-option";

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
      <NavOption setDrawerOpen={setDrawerOpen} />
    </div>
  );
};

export default NavBar;
