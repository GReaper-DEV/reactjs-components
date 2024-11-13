import {useState, useEffect, useRef} from 'react';
import {GoChevronDown, GoChevronUp} from 'react-icons/go';
import Panel from './Panel';

function Dropdown({options, value, onChange}) {

    const [isOpen, setIsOpen] = useState(false);

    const divEl = useRef();

    useEffect(() => {
        const handle = (event) => {
            if (!divEl.current){
                return;
            }

            if (!divEl.current.contains(event.target)){
                setIsOpen(false);
            }
        }
        document.addEventListener("click", handle, true);


    }, []);

    const handleClick = () => {
        setIsOpen((currentIsOpen) => !isOpen);
    }

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange(option);
    }

    const renderedOptions = options.map((option) => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)}
                    key={option.value}>
            {option.label}
        </div>;
    })

    return (
        <div ref={divEl} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer"
                 onClick={handleClick}>{value?.label || 'Select...'}
                {isOpen ? <GoChevronUp /> : <GoChevronDown />}
            </Panel>
            {isOpen &&
                <Panel className="absolute top-full">{renderedOptions}</Panel>}
        </div>
    );
}

export default Dropdown;