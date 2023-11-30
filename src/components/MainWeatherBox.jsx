function MainWeatherBox() {
    return(
    <div className="mainWeatherBox">
        <div className="mainWeatherInfo">
            <li>
                <ul>достать температуру</ul>
                <ul>достать день</ul>
            </li>
            <span>заменить иконкой</span>
        </div>
        <div className="secondaryInfo">
            <li>
                <ul>достать время</ul>
                <ul>достать локацию</ul>
            </li>
        </div>
    </div>
    )
}

export default MainWeatherBox;