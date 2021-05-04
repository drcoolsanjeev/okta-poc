import React from 'react';

const TableHeader = (props)=>{
    const {columns} = props;
    return(
        <tr style={{backgroundColor:'#EDEDED'}}>
            <th>Index</th>
            {columns.map(col=><th key={col.key} style={{width:col.width}}>{col.label}</th>)}
        </tr>
    )
}

export {TableHeader}