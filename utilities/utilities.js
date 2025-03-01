function addition(id) {
    const value = document.getElementById(id).innerText;
    const integer = parseInt(value);
    const result = integer + 1;
    return result;
}

function subtraction(id) {
    const value = document.getElementById(id).innerText;
    const integer = parseInt(value);
    const result = integer - 1;
    if (result === 0){
        // document.getElementById('task-number').innerText = 0;
        const finish = alert('Congrats!!! You have completed all the current tasks.')
        return finish;
    }
    else{
        return result;
    }
}

function time() {
    let today = new Date();

    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    // checking whether AM or PM
    let newFormat = hours >= 12 ? 'PM' : 'AM';

    // converting to 12 hour format
    hours = hours % 12;

    // setting 0 as 12
    hours = hours ? hours : 12;

    minutes = minutes < 10 ? '0' + minutes : minutes;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    let time = hours + ':' + minutes + ':' + seconds + ' ' + newFormat;

    return time;
}

