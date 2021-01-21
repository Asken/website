const fetchFromServer = () => {
    fetch('/test')
        .then(response => response.json())
        .then(data => {
            if (data.success === true) {
                document.getElementById('message').value = data.message
            }
        })
}
