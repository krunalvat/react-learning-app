import React, { createContext } from "react";
import ComponentA from "./ComponentA";

const Name = createContext();

const UseContext = () => {

    return (
        <>
            <Name.Provider value="Test Value">
                <ComponentA />
            </Name.Provider>
        </>
    ) 
}
export default UseContext;

export {Name};