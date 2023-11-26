import React from "react";

function Props(props) {

return(
    <>
        <div className="text-center">
            <h1 style={{color : "darkGreen"}}> {`Name is:-    ${props.name} `}</h1>
        </div>
    </>
);

}

export default Props;