document.getElementById("search").addEventListener("click", () => {
    const city = document.getElementById("city").value;
    const apiKey = "a7997f9d25a5a0993ffffa70e99cc2fa";
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                document.getElementById("location").innerText = `${data.name}, ${data.sys.country}`;
                document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
                document.getElementById("description").innerText = `Weather: ${data.weather[0].description}`;
            })
            .catch(() => {
                alert("City not found!");
            });
    } else {
        alert("Please enter a city name.");
    }
});
