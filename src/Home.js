import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {InputCell,TableHeader,TableRow} from './Table'

const COLUMNS = [
  {key:'chrome_id',value:'chrome_id',label:'Chrome ID',width:150},
  {key:'year',value:'year',label:'Year',width:150},
  {key:'make',value:'make',label:'Make',width:150},
  {key:'model',value:'model',label:'Model',width:150},
  {key:'trim',value:'trim',label:'Trim',width:450},
  {key:'model_code',value:'model_code',label:'Model Code',width:150},
  {key:'drive_type',value:'drive_type',label:'Drive Type',width:150},
  {key:'body_type',value:'body_type',label:'Body Type',width:150},
  {key:'body_class',value:'body_class',label:'Body Class',width:150},
  {key:'fuel_type',value:'fuel_type',label:'Fuel Type',width:150},
  {key:'base_invoice',value:'base_invoice',label:'Base Invoice',width:150},
  {key:'base_msrp',value:'base_msrp',label:'Base Msrp',width:150},
  {key:'freight',value:'freight',label:'Freight',width:150},
  {key:'tekion_id',value:'tekion_id',label:'Tekion ID',width:150},
  {key:'option',value:'option',label:'Option',width:150},
]

const ROWS =[
  {
    chrome_id:'chrome_id',
    year:'year',
    model:'model',
  },
  {
    chrome_id:'chrome_id',
    year:'year',
    model:'model',
  },
  {
    chrome_id:'chrome_id',
    year:'year',
    model:'model',
  },
]



function Home() {
  const [rows,setRows] = useState(ROWS);
  const [selectedItem,setSelectedItem] = useState({rowNumber:0,cellNumber:0});

  const updateCell = ({rowNumber, cellNumber, objKey, data})=>{
    setRows(prevState=>{
      prevState[rowNumber]= {...prevState[rowNumber],[objKey]:data};
      return [...prevState]
    })
  }

  const updateSelection = ({rowNumber,cellNumber})=>{
    setSelectedItem({rowNumber:rowNumber,cellNumber:cellNumber})
  }
  return (
    <div className="page">
      <h1>Login with React</h1>
      <Link to="/private">
        <button type="button">
          Visit Restricted Page
        </button>
      </Link>
      <br/>
      <div className='table_container'>
      <table>
        <TableHeader columns={COLUMNS}/>
        { rows.map((row,index)=><TableRow columns={COLUMNS} row={row} index={index} updateCell={updateCell} selectedItem={selectedItem} updateSelection={updateSelection}/>) }
        </table>
        </div>
    </div>
  );
}

export default Home;
