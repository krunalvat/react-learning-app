import React,{useState} from "react";



function UseStateExample() {

    const [name, updatedNewName] = useState("Hello");
    const [number, setNumber] = useState(0);

    const updatedName = (event) => {
        updatedNewName(event.target.value);
    }

    const increment = () => {
        setNumber( number +1);
    }

    const decrement = () => {
        number <= 0 ?  setNumber( 0 ) : setNumber( number - 1);
    }

    return (
        <>
        <h1>{ name }</h1>
        <h1> <input type="text" name="name" value={name} onChange={ updatedName }></input></h1>
        
        <h1>{ number }</h1>
        <h1> <button value={number} onClick={ increment } className="btn btn-primary btn-lg" title="Add"> + </button> <button value={number} onClick={ decrement } className="btn btn-danger btn-lg" title="Remove"> - </button></h1>
        </>
    )
};

export default UseStateExample;