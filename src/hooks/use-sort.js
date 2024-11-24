import {useState} from "react";
import {GoArrowSmallDown, GoArrowSmallUp} from "react-icons/go";

function useSort(data, config) {

    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);

    const setSortColumn = (label) => {
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

    return {
        getIcons,
        setSortColumn,
        sortBy,
        sortOrder,
        sortedData
    }
}

export default useSort;