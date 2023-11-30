import MainWeatherBox from './MainWeatherBox';
import DetailedInfoBox from './DetailedInfoBox';
import TopBar from './TopBar';

function MainPage() {
    return(
        <>
            <TopBar/>
            <MainWeatherBox />
            <DetailedInfoBox />
        </>
    );
}

export default MainPage;