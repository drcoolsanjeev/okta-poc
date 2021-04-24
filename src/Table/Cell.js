import React,{useState,useEffect} from 'react';

const InputCell =({cellData,rowNumber,cellNumber ,col, updateCell,updateSelection,selectedItem})=>{
    const [data,setData] = useState();
    const [selected,setSelected] = useState(false);
    const [focussed,setFocussed] = useState(false);

    useEffect(() => {
        setData(cellData);
        if(selectedItem.cellNumber===cellNumber && selectedItem.rowNumber===rowNumber){
            setSelected(true);
        }
    }, []);

    useEffect(() => {
        if(selectedItem.cellNumber===cellNumber && selectedItem.rowNumber===rowNumber){
            setSelected(true);
        }else {
            if(selected){
                setSelected(false)
            }
        }
    }, [selectedItem]);
    
    const onChange =(event)=>{
        setData(event.target.value)
    }

    const onFocus = ()=>{
        setSelected(true);
    }
    
    const onFocusOut = () => {
        setSelected(false);
        setFocussed(false);
        if(cellData!==data) {
            updateCell({rowNumber,cellNumber,objKey:col.value,data});
        }
    }

    const onClick =()=>{
        setSelected(true);
        updateSelection({rowNumber,cellNumber})
    }

    const onDoubleClick=()=>{
        setSelected(false)
        setFocussed(true);
    }

    return(
        <td style={{width:col.width , border:selected ? '1px solid red' : ( focussed ?'2px solid blue':'') }}>
            {
            !focussed? 
            <input
                className="input_cell"
                style={{ border:0,width:col.width}}
                type="text"
                readOnly
                value={data}
                onClick={onClick}
                onDoubleClick={onDoubleClick}
                onBlur={onFocusOut}
            />:
                <input
                    className="input_cell"
                    style={{ border:0,width:col.width}}
                    type="text"
                    value={data}
                    onChange={onChange}
                    onBlur={onFocusOut}
                    autoFocus
                    onFocus={onFocus}
                />
            }
        </td>
    )
};

export { InputCell };
