import { AiTwotoneShopping } from "react-icons/ai";
import React,{useState} from 'react';

type HeaderProps  ={
    label:string
    
    
 }
 

export default function NavBarIcon ({label}:HeaderProps){
    const [isShown, setIsShown] = useState(false);
    return(
        <div>
             <AiTwotoneShopping
             onMouseEnter={() => setIsShown(true)}
             onMouseLeave={() => setIsShown(false)}>

             </AiTwotoneShopping>
             {isShown && (
        <div>
            <ul>
                <li> {label} </li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
      )}
            

        </div>



    )}