import { AiTwotoneShopping } from "react-icons/ai";
import React,{useState} from 'react';
import ItemListContainer from "./ItemListContainer";


 

export default function NavBarIcon (){
    const [isShown, setIsShown] = useState(false);
    return(
        <div>
             <AiTwotoneShopping
             onMouseEnter={() => setIsShown(true)}
             onClick={() => setIsShown(false)}>

             </AiTwotoneShopping>
             
             {isShown && (
            <ItemListContainer label="Bienvenido Gabriel"></ItemListContainer>
      )}
            

        </div>



    )}