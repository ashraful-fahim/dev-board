document.getElementById('clear-history')
    .addEventListener('click', function (event) {
        // event.preventDefault();
        const clearHistory = document.getElementById("new-elements");
        clearHistory.innerHTML = '';
    })