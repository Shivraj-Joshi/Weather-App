const apiKey = '33ff0cba6b9055d9e889cf9e007c3a08';
document.querySelector("#search-btn").addEventListener("click", () => {

    const cityInput = document.querySelector("#search-box");
    const city = cityInput.value;
    if (city) {

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(Response => Response.json())
            .then(data => {

                const currentDate = new Date();
                const formattedDate = currentDate.toDateString();
                document.querySelector("#location").textContent = `${data.name}, ${data.sys.country}`;
                document.querySelector("#date").textContent = `${formattedDate}`;
                document.querySelector("#temp").textContent = `${Math.round(data.main.temp)} °C`;
                document.querySelector("#humid").textContent = `${data.main.humidity}% humidity`;
                document.querySelector("#windspeed").textContent = `${data.wind.speed}kmph`;
                cityInput.value = '';
            })
            .catch(error => {
                alert('city not found!')
            });
    }

});