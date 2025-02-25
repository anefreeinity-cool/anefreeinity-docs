import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "../../assets/icons/menu";

interface INavOptionProps {
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavOption: React.FC<INavOptionProps> = ({ setDrawerOpen }) => {
  const [topics, setTopics] = useState<{ topics: any[] } | null>(null);
  const navigate = useNavigate();

  const handleTopicClick = (topic: string) => {
    navigate(`/${topic}`);
  };

  useEffect(() => {
    fetch("/Data/topicsData.json")
      .then((res) => res.json())
      .then((Data) => {
        setTopics(Data);
        console.log(Data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="h-[37%] bg-slate-900 flex items-center gap-2">
      <button
        className="p-1 ml-2 my-auto bg-transparentl hover:bg-gray-700 rounded-sm n"
        onClick={() => setDrawerOpen((prev) => !prev)}
      >
        <MenuIcon className="w-5 h-5 fill-white" />  
      </button>
      <div className="flex items-center justify-between gap-2">
        {topics ? (
          topics.topics.map((item, index) => (
            <button
              className="px-2 py-1 ml-2 my-auto bg-gray-700 rounded-xl text-sm"
              key={index}
              onClick={() => handleTopicClick(item.name)}
            >
              {item.name}
            </button>
          ))
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
};

export default NavOption;
