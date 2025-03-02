const btn1 = document.getElementById('btn-completed-1');
btn1.addEventListener('click', function (event) {
    alert('Board Updated Successfully');

    const taskNumber = subtraction('task-number');
    document.getElementById('task-number').innerText = taskNumber;

    const tickNumber = addition('tick-number');
    document.getElementById('tick-number').innerText = tickNumber;

    btn1.disabled = true;

    const taskName = document.getElementById('task-name-1').innerText;
    const activity = document.getElementById('new-elements');
    const div = document.createElement('div');
    div.innerHTML = `
        <h3 class="p-3 text-sm border-[#F4F7FF] bg-[#F4F7FF] rounded-lg">You have completed the task ${taskName} at ${time()}.</h3> 
        `
    activity.appendChild(div);
})

const btn2 = document.getElementById('btn-completed-2');
btn2.addEventListener('click', function (event) {
    alert('Board Updated Successfully');

    const taskNumber = subtraction('task-number');
    document.getElementById('task-number').innerText = taskNumber;

    const tickNumber = addition('tick-number');
    document.getElementById('tick-number').innerText = tickNumber;

    btn2.disabled = true;

    const taskName = document.getElementById('task-name-2').innerText;
    const activity = document.getElementById('new-elements');
    const div = document.createElement('div');
    div.innerHTML = `
        <h3 class="p-3 text-sm border-[#F4F7FF] bg-[#F4F7FF] rounded-lg">You have completed the task ${taskName} at ${time()}.</h3> 
        `
    activity.appendChild(div);
})

const btn3 = document.getElementById('btn-completed-3');
btn3.addEventListener('click', function (event) {
    alert('Board Updated Successfully');

    const taskNumber = subtraction('task-number');
    document.getElementById('task-number').innerText = taskNumber;

    const tickNumber = addition('tick-number');
    document.getElementById('tick-number').innerText = tickNumber;

    btn3.disabled = true;

    const taskName = document.getElementById('task-name-3').innerText;
    const activity = document.getElementById('new-elements');
    const div = document.createElement('div');
    div.innerHTML = `
        <h3 class="p-3 text-sm border-[#F4F7FF] bg-[#F4F7FF] rounded-lg">You have completed the task ${taskName} at ${time()}.</h3> 
        `
    activity.appendChild(div);
})

const btn4 = document.getElementById('btn-completed-4');
btn4.addEventListener('click', function (event) {
    alert('Board Updated Successfully');

    const taskNumber = subtraction('task-number');
    document.getElementById('task-number').innerText = taskNumber;

    const tickNumber = addition('tick-number');
    document.getElementById('tick-number').innerText = tickNumber;

    btn4.disabled = true;

    const taskName = document.getElementById('task-name-4').innerText;
    const activity = document.getElementById('new-elements');
    const div = document.createElement('div');
    div.innerHTML = `
        <h3 class="p-3 text-sm border-[#F4F7FF] bg-[#F4F7FF] rounded-lg">You have completed the task ${taskName} at ${time()}.</h3> 
        `
    activity.appendChild(div);
})

const btn5 = document.getElementById('btn-completed-5');
btn5.addEventListener('click', function (event) {
    alert('Board Updated Successfully');

    const taskNumber = subtraction('task-number');
    document.getElementById('task-number').innerText = taskNumber;

    const tickNumber = addition('tick-number');
    document.getElementById('tick-number').innerText = tickNumber;

    btn5.disabled = true;

    const taskName = document.getElementById('task-name-5').innerText;
    const activity = document.getElementById('new-elements');
    const div = document.createElement('div');
    div.innerHTML = `
        <h3 class="p-3 text-sm border-[#F4F7FF] bg-[#F4F7FF] rounded-lg">You have completed the task ${taskName} at ${time()}.</h3> 
        `
    activity.appendChild(div);
})

const btn6 = document.getElementById('btn-completed-6');
btn6.addEventListener('click', function (event) {
    alert('Board Updated Successfully');

    const taskNumber = subtraction('task-number');
    document.getElementById('task-number').innerText = taskNumber;

    const tickNumber = addition('tick-number');
    document.getElementById('tick-number').innerText = tickNumber;

    btn6.disabled = true;

    const taskName = document.getElementById('task-name-6').innerText;
    const activity = document.getElementById('new-elements');
    const div = document.createElement('div');
    div.innerHTML = `
        <h3 class="p-3 text-sm border-[#F4F7FF] bg-[#F4F7FF] rounded-lg">You have completed the task ${taskName} at ${time()}.</h3> 
        `
    activity.appendChild(div);
})

document.getElementById('btn-blogs')
    .addEventListener('click', function () {
        window.location.href = './blog.html';
    })


document.getElementById('theme')
    .addEventListener('click', function (event) {
        // document.getElementById('body').classList.remove()
        document.getElementById('body').style.backgroundColor = randomRgb();
    })


document.addEventListener('DOMContentLoaded', function (event) {
        // console.log('Page is fully loaded and parsed.');
        document.getElementById('time').innerText = `${dateTime()}`;
    });


