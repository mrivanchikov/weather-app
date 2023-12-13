import axios from "axios";

async function forecastApi({latitude, longitude}) {
    const apiKey = 'd28c8aa601ec6f24143866e1e1cd7906';
    let response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);
    console.log(response.data);
    return response.data;
}

export default forecastApi;