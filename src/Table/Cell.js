import React,{useState,useEffect} from 'react';

const InputCell =({cellData,rowNumber,col,cellNumber, updateCell})=>{
    // cellData && console.log("🚀 ~ file: Cell.js ~ line 4 ~ InputCell ~ cellData", cellData)
    const [data,setData] = useState();
    const [selected,setSelected] = useState(false);

    useEffect(() => {
        setData(cellData);
    }, []);

    useEffect(() => {
        if(JSON.stringify(data)!==JSON.stringify(cellData)){ setData(cellData)}
    }, [cellData]);
    
    const onChange =(event)=>{
        setData(event.target.value)
    }

    const onFocus = ()=>{
        setSelected(true);
    }
    
    const onFocusOut = () => {
        if(cellData!==data) {
            updateCell({rowNumber,cellNumber,objKey:col.value,data});
        }
    }

    return(
        <td key={`td-${col}`}>
            <input
                autoFocus={col===0&&rowNumber===0}
                className="input_cell"
                readOnly={!selected}
                style={{ border:0,width:col.width}}
                type="text"
                value={data}
                onChange={onChange}
                onKeyPress={(e)=>{console.log("test",e)}}
                onBlur={onFocusOut}
                onFocus={onFocus}
            />
        </td>
    )
};


const match =(prevProps,nextProps)=>{
    return JSON.stringify(prevProps.cellData)===JSON.stringify(nextProps.cellData);
}
 export default React.memo(InputCell,match)
 
export { InputCell };
