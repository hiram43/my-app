
import React,{useState} from 'react';
type itemProp={
    item:string
}


export default function ItemList ({item}:itemProp){
    
    const [estado,setEstado ] =useState("Estado Inicial");

    function promiseFill(x:any) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(x);
          }, 2000);
        });
      
    
    }
    async function fillTable() {
        var x = await promiseFill(5);
     
        
        setEstado("estado Final");
        console.log("ya entre")
    }
      fillTable();

      return(<div>
          <li>Carrito de compras </li>
        <li> {estado} </li>
        <li>{estado} 1</li>
        <li>{estado} 2</li>
        <li>{estado} 3</li>
    </div>)
    
    



}