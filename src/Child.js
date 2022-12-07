import { useEffect, useId, useContext } from "react";
import {theme} from './practice';
export default function ChildComp({handleChange}){
    const id=useId();
    // useEffect(() => {
    //     console.log(id,"id----")
    //     handleChange("hello")
    // }, [])

    const value = useContext(theme);
    console.log(value,"valllll")
return (
    <div>
        <p>HELLO {value.name}-{value.DOB}</p>
    </div>
)
}