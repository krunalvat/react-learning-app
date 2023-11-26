import React from "react";

function ChallengeThree() {


    let time = new Date();
    time = time.getHours();
    let greeting = '';
    let cssStyle ={ };
    if(time >= 1 && time < 12) {
    greeting = "Good Morning";
    cssStyle.color ="green";
    } else if(time >=12 && time <17) {
    greeting = "Good Afternoon";
    cssStyle.color ="orange";
    } else {
    greeting = "Good Night";
    cssStyle.color ="black";
    }
    return(
        <> 
            <div className="greetings text-center">
                <h1> Challenge Three Create Greeeting Wish Using React</h1>
                <h1> Hello sir, <span style={ cssStyle } > {  greeting } </span></h1>
            </div>
        </>
    );
}

export default ChallengeThree