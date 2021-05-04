import React, { useEffect } from 'react';
import InputCell from './Cell';

const TableRow = (props) => {
    const [stateRow,setStateRow] = React.useState([]);
    useEffect(() => {
       if(JSON.stringify(stateRow)!==JSON.stringify(props.row)){ setStateRow(props.row)}
    }, [props.row]);
    const {columns,row,index,updateCell}=props;
    return(<tr key={`tr-${index}`}>
        <td key={`td-${index}`} style={{width:49, textAlign:'left',backgroundColor:'#efefef'}}>{index}</td>
        {columns.map((col,colIndex)=>
            <InputCell
                rowNumber={index}
                cellNumber={colIndex}
                col={col}
                cellData={stateRow[col.key]}
                updateCell={updateCell}
            />
        )}
    </tr>)
}
const match =(prevProps,nextProps)=>{
    return JSON.stringify(prevProps.row)===JSON.stringify(nextProps.row);
}
export default React.memo(TableRow,match)

export {TableRow}