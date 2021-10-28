
import React,{useState} from 'react';

type HeaderProps  ={
    stock:number,
    initialNumber :number
    agregar:string
 }
  

export default function Contador ({stock,initialNumber,agregar}:HeaderProps){

    const [count,setCount ] =useState(initialNumber);
    

    return(
        <div>
            <p>{count}</p>
            
            <button onClick={()=>{count<stock?setCount(count +1):alert("no tenemos mas stock!!")} }>Sumar desde estado</button>

            <button onClick={()=>{count>0?setCount(count -1):alert("no podemos venderte stock negativo")}}>Restar desde estado</button>
      
            <button onClick={() => alert("el elemento "+ agregar + "se ha agregado")}>enviar al carrito</button>

        </div>
    )


}