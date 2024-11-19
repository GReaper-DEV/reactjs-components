import { Fragment } from 'react';

function Table({data, config, keyFn}) {

    const renderHeaders = config.map((column) => {
        if (column.header){
            return <Fragment key={column.label}>{column.header()}</Fragment>
        }

        return <th key={column.label}>{column.label}</th>
    })

    const renderedRows = data.map((row) => {
        return (
            <tr className="border-b" key={keyFn(row)}>
                {config.map((column) => {
                    return <td key={column.label} className="p-3">
                        {column.render(row)}
                    </td>
                })}
            </tr>
        )
    });

    return (
        <table className="table-auto border-spacing-2">
            <thead>
            <tr className="border-b-2">
                {renderHeaders}
            </tr>
            </thead>
            <tbody>
            {renderedRows}
            </tbody>
        </table>
    );
}

export default Table;