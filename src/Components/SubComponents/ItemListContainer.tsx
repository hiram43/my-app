


type HeaderProps  ={
    label:string
    
    
 }
 

export default function ItemListContainer ({label}:HeaderProps){
    return (
        <div>
            <ul>
                <li> {label} </li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    )


}