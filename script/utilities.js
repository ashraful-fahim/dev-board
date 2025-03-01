function addition(id){
    const value = document.getElementById(id).innerText;
    const integer = parseInt(value);
    const result = integer + 1;
    return result;
}

function subtraction(id){
    const value = document.getElementById(id).innerText;
    const integer = parseInt(value);
    const result = integer - 1;
    return result;
}