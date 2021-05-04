import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {TableHeader} from './Table'
import TableRow from './Table/Row'
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

const ROWS = new Array(1000).fill({
  
    chrome_id:'test-chrome_id',
    year:'test-year',
    make:'test-make',
    model:'test-model',
    trim:'test-trim',
    model_code:'test-model_code',
    drive_type:'test-drive_type',
    body_type:'test-body_type',
    body_class:'test-body_class',
    fuel_type:'test-fuel_type',
    base_invoice:'test-base_invoice',
    base_msrp:'test-base_msrp',
    freight:'test-freight',
    tekion_id:'test-tekion_id',
    option:'test-option',
    
})
// [
//   {
//     chrome_id:'chrome_id',
//     year:'year',
//     model:'model',
//   },
//   {
//     chrome_id:'chrome_id',
//     year:'year',
//     model:'model',
//   },
//   {
   
//   },
// ]




function Home() {
  const [rows,setRows] = useState(ROWS);
  console.log(rows)

  const updateCell = ({rowNumber, cellNumber, objKey, data})=>{
    setRows(prevState=>{
      prevState[rowNumber]= {...prevState[rowNumber],[objKey]:data};
      return [...prevState]
    })
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
        { rows.map((row,index)=><TableRow key={`trow-${index}`}
        columns={COLUMNS}
        row={row}
        index={index}
        updateCell={updateCell}/>) }
        </table>
        </div>
    </div>
  );
}

export default Home;
