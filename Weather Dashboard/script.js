async function getWeather() {
    let city = document.getElementById("city").value;
    let status = document.getElementById("status");
    let result = document.getElementById("result");

    if (city === "") {
        status.innerText = "Enter a city name";
        return;
    }

    status.innerText = "Loading...";
    result.innerHTML = "";

    try {
        let response = await fetch(`https://wttr.in/${city}?format=j1`);
        let data = await response.json();

        let temp = data.current_condition[0].temp_C;
        let desc = data.current_condition[0].weatherDesc[0].value;

        status.innerText = "";
        result.innerHTML = `
            <h3>${city}</h3>
            <p>Temperature: ${temp}°C</p>
            <p>Condition: ${desc}</p>
        `;
    } catch (error) {
        status.innerText = "Error fetching data";
    }
}