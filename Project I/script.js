

 // You can change this to any city you want to check the weather for




const apiKey = "3554994a8a1df54d6e1bbfec71587071";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    // Build the URL here so "city" is already defined
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    

    const response = await fetch(apiUrl);

    if(response.status === 404) {
        alert("City not found");
        return;

        }    const data = await response.json();
    // console.log(data);

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
    document.querySelector("div p").innerText = data.main.humidity + "%"; // fixed typo
    document.querySelector(".wind").innerText = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "img/clouds.png";
    }else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "img/clear.png";
} else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "img/rain.png";
} else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "img/drizzle.png";
}
document.querySelector(".weather").style.display = "block"; // Show the weather section
}

searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
























// const apiKey = "3554994a8a1df54d6e1bbfec71587071";
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;


// const searchBox = document.querySelector(".search input");
// const searchButton = document.querySelector(".search button");

// async function checkWeather(city) {
//     const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//     var data = await response.json();
//     console.log(data);
    

//     document.querySelector(".city").innerText = data.name;
//     document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
//     document.querySelector(".huminity").innerText=data.main.humidity + "%";
//     document.querySelector(".wind").innerText = data.wind.speed + " km/h";
// }
// searchButton.addEventListener("click", () => {
//     checkWeather(searchBox.value);
// }
// )


  

























// let temp = document.querySelector(".temp")
// let cityName = document.querySelector(".city")
// let Myhumidity = document.querySelector(".huminity")
// let wind = document.querySelector(".wind")



// const apiKey = "3554994a8a1df54d6e1bbfec71587071";
// let weatherData =  async ()=>{

//     let city = document.querySelector(".search input").value.trim()

//     if(!city){
//         alert("PLease city")
//         return
//     }
// }
//     console.log(city)


    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    // try {
    //     let response = await fetch(url);
    //     if (!response.ok) {
    //         console.error("HTTP error! status:", response.status);
    //         return;
    //     }


    //     let data = await response.json();
    //     console.log(data)

    //     temp.innerText= Math.round(data.main.temp)
    //     cityName.innerText=data.name
    //     Myhumidity.innerText=data.main.humidity
    //     wind.innerText=data.wind.speed


    // } catch (error) {
    //     console.error("Error fetching weather data:", error);
    // }
