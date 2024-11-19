import Table from "./Table";
import {useState} from 'react';
import {GoArrowSmallDown, GoArrowSmallUp} from 'react-icons/go';

function SortableTable(props) {

    const {config, data} = props;

    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);

    const handleHeaderClick = (label) => {
        if (sortBy && label !== sortBy) {
            setSortOrder('asc');
            setSortBy(label);
            return;
        }

        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        } else if (sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null)
        }
    }

    const getIcons = (label, sortBy, sortOrder) => {
        if (label !== sortBy) {
            return <div>
                <GoArrowSmallUp/>
                <GoArrowSmallDown/>
            </div>
        }

        if (sortOrder === null) {
            return <div>
                <GoArrowSmallUp/>
                <GoArrowSmallDown/>
            </div>
        } else if (sortOrder === 'asc') {
            return <div><GoArrowSmallUp/></div>
        } else if (sortOrder === 'desc') {
            return <div><GoArrowSmallDown/></div>
        }
    }

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => <th className="cursor-pointer hover:bg-gray-100"
                              onClick={() => handleHeaderClick(column.label)}>
                <div className={"flex items-center"}>
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label}
                </div>
            </th>
        };
    });

    let sortedData = data;

    if (sortBy && sortOrder) {
        const {sortValue} = config.find((column) => column.label === sortBy)
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
            } else {
                return (valueA - valueB) * reverseOrder;
            }
        });

    }

    return <Table {...props} data={sortedData} config={updatedConfig}/>
}

export default SortableTable;