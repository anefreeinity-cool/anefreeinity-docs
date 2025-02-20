import { useEffect, useState } from "react";

const Tree: React.FC = () => {
    const [data, setData] = useState<{ slidebar: any[] } | null>(null);
    const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({});

    useEffect(() => {
        fetch("/Data/slidebarData.json")
            .then((res) => res.json())
            .then((Data) => {
                setData(Data);
                console.log(Data);
            })
            .catch((error) => console.log(error));
    }, []);

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
                    {data.slidebar.map((item, index) => (
                        <li className="flex flex-col hover:bg-slate-600" key={index} >
                            <a className="">{item.name}
                                {item.Children.length > 0 && (
                                    <button
                                        onClick={() => toggleExpand(index)}
                                        className="ml-4 flex-row items-center bg-white w-6 rounded-md text-black"
                                    >
                                        {expandedItems[index] ? "-" : "+"}
                                    </button>
                                )}
                            </a>
                            {item.Children.length > 0 && expandedItems[index] && (
                                <ul className="flex-row" >
                                    {item.Children.map((child: any, childIndex: number) => (
                                        <li className=" hover:bg-slate-700 pl-4" key={childIndex}>
                                            {child.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Tree;
