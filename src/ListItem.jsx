import React, { useState } from "react";

const ListItem = function(props){
    const [line , setLine] = useState(false);
    const cutit = function(){
        // seting line true
        setLine(true);
    }
    return (
    <>
        <div className="list-div">
            <button onClick={cutit}>X</button>
            <li style={{textDecoration:line?'line-through':'none'}}>{props.itemName}</li>
        </div>
    </>
    )
}
export default ListItem;

// const ListItem = function(props){
    
//     return (
//     <>
//         <div className="list-div">
//             <button onClick={()=>props.func(props.id)}>X</button>
//             <li>{props.itemName}</li>
//         </div>
//     </>
//     )
// }

// Learned about passing parameter from child components to parent component.