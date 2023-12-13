/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux/es/hooks/useSelector";

function MainWeatherBox() {
    const {currentWeather} = useSelector((state)=>state);
    const iconsLink = `http://openweathermap.org/img/w/${currentWeather?.weather[0].icon}.png`;
    return(
    <div className="m-5 rounded-2xl border p-8 shadow">
        <div>{currentWeather?.main.temp}</div>
        <div>today</div>
        <div><img src={iconsLink} alt="Weather icon"/></div>
        <div>достать время</div>
        <div>{currentWeather?.name}</div>
    </div>
    )
}

export default MainWeatherBox;