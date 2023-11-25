function addition(a,b) {

    return a + b;
}

function subtraction(a,b) {

    return a - b;
}

function multiplication(a,b) { 
    return a * b;
}

function division(a,b) { 
    let division = a / b;
    return division.toFixed(2);
}

export {addition, subtraction, multiplication, division};