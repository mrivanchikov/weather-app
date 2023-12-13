import { useSelector } from "react-redux/es/hooks/useSelector";

function DetailedInfoBox() {
    const state = useSelector((state)=>state)
    const {currentWeather} = state;

    return(
        <div className="m-5 rounded-2xl border p-8 shadow">
            <div>
                <span>иконка </span>
                <span>температура {currentWeather?.main.temp} </span>
                <span>ощущается как {currentWeather?.main.feels_like}</span>
            </div>
            <div>
                <span>иконка </span>
                <span>давление {currentWeather?.main.pressure} </span>
                <span>описание </span>
            </div>
            <div>
                <span>иконка </span>
                <span>{currentWeather?.weather[0].main} </span>
                <span>{currentWeather?.weather[0].description} </span>
            </div>
            <div>
                <span>иконка </span>
                <span>{currentWeather?.wind.speed} </span>
                <span>{currentWeather?.wind.deg} </span>
            </div>
        </div>        
    );

}

export default DetailedInfoBox;