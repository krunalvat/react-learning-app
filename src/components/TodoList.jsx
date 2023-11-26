import React from "react";


const TodoList = (props) =>{

    return (
        <>{props.data}
             <button className="btn" onClick={()=>{
                props.onSelect(props.id);
            }}>  <i class="fa fa-trash text-danger" aria-hidden="true"></i>
            </button>
        </>
    )
}

export default TodoList;