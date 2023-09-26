import React from "react";

function List({id,text,completed}){
    const style =  { color: completed && "green"  };
        return <ul>
        <li style={style}>
            {id} - {text}  
        </li>

    </ul>
}
export default List;