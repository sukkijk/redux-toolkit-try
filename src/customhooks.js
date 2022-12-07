function useCusHooks(count){
    const increment =()=>{
      alert("increment"+count)
    }
    const decrement =()=>{
        alert("decrement")
      }
      return {increment,decrement} 
}
export default useCusHooks;