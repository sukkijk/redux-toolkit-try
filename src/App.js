import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';
import {instance} from './axiosinterceptors'
import HOC from './HOC';
import useCusHooks from './customhooks';
import ChildComp from './Child';
import Practice from './practice'


function App() {
  const [time,setTime] =useState(0);
  const {increment}= useCusHooks(0);
  const [originalString,setOrigString] = useState("John Doe");
  const [revString,setRevString] = useState("");
 var interval;

 const changeEvent =(name)=>{
  console.log(name,"name----")
 }
  useEffect(()=>async()=>{
    const data = await instance.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
      return res;
    })
    console.log(data,"data--------")
let newStr=''
   const splitStr = originalString.split(" ");
   for(let i=0;i<splitStr.length;i++){
    const splitStr1 = splitStr[i].split("");
    const SplitStr2=splitStr1.reverse();
    const revStr= SplitStr2.join("");
    newStr +=revStr+" ";
    setRevString(newStr)

   }

    //  interval = setInterval(()=>{console.log("John Doe")},5000);
// return ()=>{
//   setTime(setInterval(()=>{console.log("John Doe")},5000));
// }
  // },[interval])
},[])
  return (
    <div className="App">
    
      <Practice />
        <p>
        {revString}
        </p>
       {/* <ChildComp handleChange={changeEvent} /> */}
      
 
      <button onClick={increment}>Click custom</button>
    </div>
  );
}
const App1 = HOC(App)
export default App1;
