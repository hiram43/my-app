
import React,{useState} from 'react';

type HeaderProps  ={
    stock:number,
    initialNumber :number
 }
  

export default function Contador ({stock,initialNumber}:HeaderProps){

    const [count,setCount ] =useState(initialNumber);
    

    return(
        <div>
            <p>{count}</p>
            
            <button onClick={()=>{count<stock?setCount(count +1):alert("no tenemos mas stock!!")} }>Sumar desde estado</button>

            <button onClick={()=>{count>0?setCount(count -1):alert("no podemos venderte stock negativo")}}>Restar desde estado</button>
      
            <button onClick={()=>alert("agregado al carrito!!")}>enviar al carrito</button>

        </div>
    )


}