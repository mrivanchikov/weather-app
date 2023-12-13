import { currentWeatherAction, forecastWeatherAction } from "../redux/slices/weatherSlices";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect } from "react";


function ForecastBox() {
const dispatch = useDispatch();
useEffect(()=>{
    dispatch(forecastWeatherAction());
    dispatch(currentWeatherAction({city: 'London'}));
},[dispatch]);
const forecastState = useSelector((forecastState)=>forecastState);
const {forecastWeather} = forecastState;

let forecastBox=[];

    for(let i = 3, j=0; i<forecastWeather?.list.length; i+=8, j++){
    const iconsLink = `http://openweathermap.org/img/w/${forecastWeather?.list[i].weather[0].icon}.png`;
    forecastBox[j] =(
        <div className="m-3 p-2 rounded-2xl border shadow">
            <div>{forecastWeather?.list[i].dt_txt}</div>
            <div>{forecastWeather?.list[i].main.temp}</div>
            <div>{forecastWeather?.list[i].main.feels_like}</div>
            <div><img src={iconsLink} alt="Weather icon"/></div>
            <div>{forecastWeather?.list[i].weather[0].description}</div>
        </div>
    )
}
return <div className="flex justify-between rounded-2xl border p-1 m-5 shadow">{forecastBox}</div>;

}

export default ForecastBox;