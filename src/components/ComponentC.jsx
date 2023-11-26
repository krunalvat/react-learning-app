import React, { useContext } from "react";
import {Name} from './UseContext';


const ComponentC = () => {

    const name = useContext(Name);
    
    return (
        <>
            <h1 className="text-center">Hello My Name is Form Parent To {name} Last</h1>
        </>
    );
}

export default ComponentC;