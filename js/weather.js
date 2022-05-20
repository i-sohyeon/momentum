const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "39fdbfb2666132512eec30e76a06cc84"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    // console.log("you live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
   fetch(url).then((response) => response.json())
   .then((data) => {
       city.innerText = data.name;
       weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
   });
}
    
function onGeoError() {
    alert("can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//해당 함수는 성공콜백과 에러콜백이 필요함