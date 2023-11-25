import React from "react";

function ChallengeTwo () {
    let name ="John";
    return (
        <>
            <h1>{`Challenge Two Helo, My Name is ${name}`}</h1>
            <p> Current Date is:- { new Date().toLocaleDateString()}</p>
            <p> Current Time is:- { new Date().toLocaleTimeString() }</p>
        </>
    );
}

export default ChallengeTwo