import React from 'react';
import { InputCell } from './Cell';

const TableRow = (props) => {
    const {columns,row,index,updateCell,selectedItem,updateSelection}=props;
    return(<tr>
        <td style={{width:49, textAlign:'left',backgroundColor:'lightgray'}}>{index}</td>
        {columns.map((col,colIndex)=>
            <InputCell
                rowNumber={index}
                cellNumber={colIndex}
                col={col}
                cellData={row[col.key]}
                updateCell={updateCell}
                selectedItem={selectedItem}
                updateSelection={updateSelection}
            />
        )}
    </tr>)
}

export {TableRow}