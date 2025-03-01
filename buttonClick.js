const btn1 = document.getElementById('btn-completed-1');
    btn1.addEventListener('click', function (event) {
        alert('Board Updated Successfully');

        const taskNumber = subtraction('task-number');
        document.getElementById('task-number').innerText = taskNumber;

        const tickNumber = addition('tick-number');
        document.getElementById('tick-number').innerText = tickNumber;

        btn1.disabled = true;

        const taskName = document.getElementById('task-name-1').innerText;
        const activity = document.getElementById('activity');
        const div = document.createElement('div');
        div.classList.add('border-[#F4F7FF] bg-[#F4F7FF] m-3 p-2 rounded-lg');
        div.innerHTML = `
        <h3>You have completed the task ${taskName} at.</h3> 
        `
        activity.appendChild(div);
    })