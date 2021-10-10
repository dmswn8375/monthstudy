const API_KEY ="1de67e4d28188da34bcf14e6e8012cd8";

function onGeoOk(position){  //공간만 만들어주면 됨
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url).then(response => response.json()).then(data =>{ //json :network - preview
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}/ ${data.main.temp}`;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError) //navigator 사용시 브라우저에서 위치 좌표 제공

//api 계정열기