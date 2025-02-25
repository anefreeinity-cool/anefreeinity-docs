import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IDescription } from "../models/description-model";

const Body: React.FC = () => {
  const [data, setData] = useState<IDescription | null>(null);
  const { subtopic } = useParams();

  useEffect(() => {
    fetch("/Data/descriptionData.json")
      .then((res) => res.json())
      .then((Data) => {
        if (!Data) return;
        const currentDescription: IDescription[] = Data.descriptions.filter(
          (item: IDescription) => item.subTopicId === subtopic
        );

        if (currentDescription.length > 0) {
          setData(currentDescription[0]);
        } else {
          setData(null);
        }
        console.log(currentDescription);
      })
      .catch((error) => console.log(error));
  }, [subtopic]);
  return (
    <div className="overflow-hidden">
      {data && (
        <p className="text-justify px-4 md:px-32 text-gray-300">
          {data.description}
        </p>
      )}
    </div>
  );
};

export default Body;
