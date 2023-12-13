import MainWeatherBox from './MainWeatherBox';
import DetailedInfoBox from './DetailedInfoBox';
import TopBar from './TopBar';
import ForecastBox from './ForecastBox';

function MainPage() {
    return(
    <div className='box w-screen h-screen text-black bg-white dark:text-white dark:bg-black'>
        <TopBar/>
        <div className='inline-flex  w-screen justify-between' >
            <MainWeatherBox />
            <DetailedInfoBox />
        </div>
        <ForecastBox/>
    </div>
    );
}

export default MainPage;