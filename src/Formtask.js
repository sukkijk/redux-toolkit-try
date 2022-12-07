import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import {add,deleted} from './app/reducer'

export default function Formtask(){
    const [name,setName] = useState("");
    const [mark,setMark] = useState("");
    const [respdata,setResp] = useState([])
    const dispatch = useDispatch();
    const data1 = useSelector(state=> state.addstates)
   
    const addClickEvent =()=>{
const data ={
    name,
    mark
 } 
 dispatch(add(data));


    }
    return(
        <>
        <input type="text" name="name" value={name} placeholder="Student name" onChange={(e)=> setName(e.target.value)}/>
        <input type="text" name="mark" value={mark} placeholder="Total mark" onChange={(e)=> setMark(e.target.value)}/>
        <button onClick={addClickEvent}>Add</button>
        <table>
            <tr>
                <th>
                    Student Name
                </th>
                <th>
                    Total mark
                </th>
                <th>
                    Delete
                </th>
            </tr>
           
                {data1.map((ele,i)=>(
                   <tr key={i}>
 <td>
{ele.name}
 </td>
  <td>
  {ele.mark}
   </td>
   <td>
    <button onClick={()=>dispatch(deleted({index:i}))}>Delete</button>
   </td>
   </tr>
                ))}
             
           
        </table>
        </>
    )
}