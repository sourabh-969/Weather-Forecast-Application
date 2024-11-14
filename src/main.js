const url = 'https://weather-api138.p.rapidapi.com/weather?city_name=delhi';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '149add6c06mshff11fe9f53d87b7p191295jsn1df62a165a82k9',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
};
fetch(url,options)
.then(Response => Response.json())
.then(Response =>{
	console.log(Response)
description.innerHTML = Response.weather.main
temp.innerHTML = Response.main.temp
humidity.innerHTML = Response.main.humidity
windspeed.innerHTML = Response.wind.speed
})
.catch(err => console.error(err));

// Api Data{
// 	"coord": {
// 	  "lon": 77.2167,
// 	  "lat": 28.6667
// 	},
// 	"weather": [
// 	  {
// 		"id": 701,
// 		"main": "Mist",
// 		"description": "mist",
// 		"icon": "50n"
// 	  }
// 	],
// 	"base": "stations",
// 	"main": {
// 	  "temp": 293.2,
// 	  "feels_like": 293.56,
// 	  "temp_min": 293.2,
// 	  "temp_max": 293.2,
// 	  "pressure": 1013,
// 	  "humidity": 88,
// 	  "sea_level": 1013,
// 	  "grnd_level": 987
// 	},
// 	"visibility": 1100,
// 	"wind": {
// 	  "speed": 0,
// 	  "deg": 0
// 	},
// 	"clouds": {
// 	  "all": 0
// 	},