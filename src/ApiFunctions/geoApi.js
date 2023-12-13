async function geoApi(cityName, countryCode) {
    const apiKey = 'appid=d28c8aa601ec6f24143866e1e1cd7906';
    if (cityName===undefined) {
        navigator.geolocation.getCurrentPosition((position)=>{
            let result = {
                latitude: /*position.coords.latitude*/55.75,
                longitude: /*position.coords.longitude*/37.61
            }
            console.log(result);
            return result;
        })
    } else {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&${apiKey}`)
        let data = await response.json();
    
        let i =0;
        if (countryCode!==undefined) {
            while (i<data.length-1) {
            if (data[i].name===cityName&&data[i].country===countryCode) {
                console.log(i);
                break;
            }
            i++;
            }  
        }
           
        let result={latitude: data[i].lat, longitude: data[i].lon};

        console.log(result);
        return result;
    }

}

export default geoApi;