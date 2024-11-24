import Table from "./Table";
import useSort from "../hooks/use-sort";

function SortableTable(props) {

    const {config, data} = props;
    const {sortBy, sortOrder, setSortColumn, getIcons, sortedData} = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => <th className="cursor-pointer hover:bg-gray-100"
                              onClick={() => setSortColumn(column.label)}>
                <div className={"flex items-center"}>
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label}
                </div>
            </th>
        };
    });


    return <Table {...props} data={sortedData} config={updatedConfig}/>
}

export default SortableTable;