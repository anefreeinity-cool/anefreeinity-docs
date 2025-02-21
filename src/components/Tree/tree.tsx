import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ITopicData } from "../../models/topic-data-model";

const Tree: React.FC = () => {
  const [data, setData] = useState<ITopicData | null>(null);
  const [expandedItems, setExpandedItems] = useState<{
    [key: number]: boolean;
  }>({});
  const { topic, subtopic } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/Data/slidebarData.json")
      .then((res) => res.json())
      .then((Data) => {
        if (!Data) throw new Error();
        if (!topic) {
          navigate(`/${Data.sidebar[0].name}`);
        }
        const currentTopic: ITopicData[] = Data.sidebar.filter(
          (item: ITopicData) => item.name === topic
        );
        setData(currentTopic[0]);
        navigate(`/${topic}/${currentTopic[0].Children[0].name}`);
        console.log(currentTopic);
      })
      .catch((error) => console.log(error));
  }, [topic]);

  useEffect(() => {
    data && !subtopic && navigate(`/${topic}/${data?.Children[0].name}`);
  }, [subtopic, data]);

  const toggleExpand = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="p-2">
      {data ? (
        <ul>
          {data.Children.map((item, index) => (
            <li className="flex flex-col hover:bg-slate-600" key={index}>
              <div
                onClick={() => toggleExpand(index)}
                className="flex justify-between items-center"
              >
                <a onClick={() => navigate(`/${topic}/${item.name}`)}>
                  {item.name}
                </a>
                {/* {item.Children.length > 0 && (
                  <button className="ml-2 text-white w-6 h-6 rounded-md flex items-center justify-center">
                    {expandedItems[index] ? "-" : "+"}
                  </button>
                )} */}
              </div>
              {/* {item.Children.length > 0 && expandedItems[index] && (
                <ul className="flex-row">
                  {item.Children.map((child: any, childIndex: number) => (
                    <li className=" hover:bg-slate-700 pl-4" key={childIndex}>
                      {child.name}
                    </li>
                  ))}
                </ul>
              )} */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No Topic is selected</p>
      )}
    </div>
  );
};

export default Tree;
