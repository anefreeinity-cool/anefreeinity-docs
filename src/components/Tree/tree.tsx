import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ISubTopic } from "../../models/subtopic-model";

const Tree: React.FC = () => {
  const [data, setData] = useState<ISubTopic[]>([]);
  //   const [expandedItems, setExpandedItems] = useState<{
  //     [key: number]: boolean;
  //   }>({});
  const { topic, subtopic } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/Data/subTopicsData.json")
      .then((res) => res.json())
      .then((Data) => {
        if (!Data) throw new Error();
        if (!topic) {
          navigate(`/${Data.subTopics[0].topicId}/${Data.subTopics[0].id}`);
        }
        const currentTopics: ISubTopic[] = Data.subTopics.filter(
          (item: ISubTopic) => item.topicId === topic
        );
        setData(currentTopics);
        navigate(`/${topic}/${currentTopics[0].id}`);
        console.log(currentTopics);
      })
      .catch((error) => console.log(error));
  }, [topic]);

  useEffect(() => {
    data.length > 0 && !subtopic && navigate(`/${topic}/${data[0].id}`);
  }, [subtopic, data]);

  //   const toggleExpand = (index: number) => {
  //     setExpandedItems((prev) => ({
  //       ...prev,
  //       [index]: !prev[index],
  //     }));
  //   };

  return (
    <div className="p-2">
      {data.length > 0 ? (
        <ul>
          {data.map((item: ISubTopic, index) => (
            <li className="flex flex-col hover:bg-slate-600" key={index}>
              <div
                //onClick={() => toggleExpand(index)}
                onClick={() => {
                  navigate(`/${topic}/${item.id}`);
                  //toggleExpand(index);
                }}
                className="flex justify-between items-center"
              >
                <a>{item.name}</a>
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
