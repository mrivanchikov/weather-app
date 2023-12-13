async function weatherApi({latitude ,longitude}) {
    const apiKey = 'appid=d28c8aa601ec6f24143866e1e1cd7906';
    let data=`lat=${latitude}&lon=${longitude}`;
    let weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?${data}&${apiKey}&units=metric`) 
    let weather = await weatherResponse.json();
    console.log(weather);
    return(weather);   

}

export default weatherApi;