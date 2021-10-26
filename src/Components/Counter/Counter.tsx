
import React,{useState} from 'react';

  

export default function Contador (){

    const [count,setCount ] =useState(0);
  

    return(
        <div>
            <p>{count}</p>
            
            <button onClick={()=>{ setCount(count +1)} }>Sumar desde estado</button>

            <button onClick={()=>{setCount(count -1)}}>Restar desde estado</button>
      

        </div>
    )


}