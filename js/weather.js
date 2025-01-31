const API_KEY = "c58c5ae03d5c3a31e623bdecf9da33f6"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(respone => respone.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        [city.innerText,weather.innerText] = [data.name,`${data.weather[0].main} / ${data.main.temp}`];
    });
}
function onGeoError(){
    alert("Can't find you!");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);  
