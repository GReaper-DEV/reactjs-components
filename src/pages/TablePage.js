import SortableTable from "../components/SortableTable";

function TablePage() {

    const data = [
        {name: 'Orange', color: 'bg-orange-500', score: 5},
        {name: 'Apple', color: 'bg-red-300', score: 3},
        {name: 'Banana', color: 'bg-yellow-500', score: 1},
        {name: 'Lime', color: 'bg-green-500', score: 4},
    ]

    const config = [
        {label: 'Name', render: (fruit) => fruit.name, sortValue: (fruit) => fruit.name},
        {label: 'Color', render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}/>},
        {label: 'Score', render: (fruit) => fruit.score, sortValue: (fruit) => fruit.score}
    ];

    //this function is made specifically for the fruit. Imagine that you're in a component that needs to use a table, so you have to create a key for that specific component.
    const keyFn = (fruit) => {
        return fruit.name;
    }
    return (
        <SortableTable data={data} config={config} keyFn={keyFn}/>
    )
}

export default TablePage;