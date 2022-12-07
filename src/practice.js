import React, {useEffect, useRef, createContext} from "react";
import Child from './Child'

//useContext or Context API

export const theme = createContext();

export default function Practice(){
//useEffect
    useEffect(()=> {
    return ()=>{
        // setInterval(console.log('myName'),5000)
    }
},[])

//useRef
let refElement = useRef('');
useEffect(()=>{
 
    console.log(refElement,"cureent-----")
    refElement.current.value ="text";
    refElement.current.focus();
},[])

//useMemo


    return(
        <div>
            <p>Practice</p>
            <input type='text' ref={refElement} />
            <theme.Provider value={{name:"sukki",DOB:"12-6-1997"}}>
                <Child />
            </theme.Provider>
        </div>
    )
}