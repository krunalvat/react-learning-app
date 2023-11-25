import React from "react";


const TodoList = (props) =>{

    return (
        <>
            
            <li> <button className="btn btn-danger" onClick={()=>{
                props.onSelect(props.id);
            }}>*</button> {props.data}</li>
        </>
    )
}

export default TodoList;