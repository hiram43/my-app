import ItemList from "./itemList"




type HeaderProps  ={
    label:string
    
    
 }
 
 

export default function ItemListContainer ({label}:HeaderProps){
    return (
        <div>
            <ul>
            <ItemList item={"objeto"}/>
            </ul>
        </div>
    )


}