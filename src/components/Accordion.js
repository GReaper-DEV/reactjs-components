import {useState} from "react";
import { GoChevronDown, GoChevronLeft } from 'react-icons/go'


function Accordion({items}) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (index) => {
        if (index === expandedIndex){
            setExpandedIndex(-1);
        }else{
            setExpandedIndex(index);
        }
    }

    const renderedItems = items.map((item, index) => {

        const isExpanded = index === expandedIndex;
        const content = isExpanded && <div>{item.content}</div>;
        const icon = <span className="text-2xl">{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>;

        return (
            <div key={item.id}>
                <div className="cursor cursor-pointer items-center justify-between flex border-b bg-gray-50 p-3" onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {content}
            </div>
        );
    });

    return (
        <div>
            {renderedItems}
        </div>
    );
}


export default Accordion;