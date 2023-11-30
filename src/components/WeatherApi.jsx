function WeatherApi(cityName, countryCode) {
    const apiKey = 'appid=c35713a92c9e65f4fcced7daa379087f';

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&${apiKey}`)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            let i =0;
            while (i<data.length-1) {
                if (data[i].name===cityName&&data[i].country===countryCode) {
                    console.log(i);
                    break;
                }
                i++;
            }
            data=`lat=${data[i].lat}&lon=${data[i].lon}`;
            console.log(data);
        fetch(`http://api.openweathermap.org/data/2.5/weather?${data}&${apiKey}`) 
        .then((weather)=>{
            return weather.json();
        })
        .then((weatherData)=>{
            console.log(weatherData)
        })       
    })
        
}

export default WeatherApi;