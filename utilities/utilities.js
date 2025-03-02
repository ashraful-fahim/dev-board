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
    if (result === 0) {
        // document.getElementById('task-number').innerText = 0;
        const finish = alert('Congrats!!! You have completed all the current tasks.')
        return finish;
    }
    else {
        return result;
    }
}


function dateTime() {
    const dateTime = new Date();

    let daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = dateTime.getDay();
    let dayName = daysArray[day];

    let date = dateTime.getDate();
    date = date < 10 ? '0' + date : date;

    let month = dateTime.toLocaleString('default', { month: 'short' });
    // let month = date.getMonth() + 1;
    let year = dateTime.getFullYear();

    let currentDay = dayName;
    let currentDate = `${month}-${date}-${year}`;
    return [currentDay,  currentDate];
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

function randomInteger(max) {
    return Math.floor(Math.random() * (max + 1));
}
// Outputs a number between 0 and 255 inclusive 
// console.log(randomInteger(255));

function randomRgb() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    const bgColor = "rgb(" + r + "," + g + "," + b + ")";
    // return [r,g,b];
    return bgColor;
}

