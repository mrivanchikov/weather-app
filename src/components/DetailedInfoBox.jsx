function DetailedInfoBox() {
    return(
        <div className="detailedInfo">
            <li>
                <ul>
                    <div className="detailedInfoString">
                        <span>иконка </span>
                        <span>температура </span>
                        <span>описание </span>
                    </div>
                </ul>

                <ul>
                    <div className="detailedInfoString">
                        <span>иконка </span>
                        <span>давление </span>
                        <span>описание </span>
                    </div>
                </ul>

                <ul>
                    <div className="detailedInfoString">
                        <span>иконка </span>
                        <span>осадки </span>
                        <span>описание </span>
                    </div>
                </ul>

                <ul>
                    <div className="detailedInfoString">
                        <span>иконка </span>
                        <span>ветер </span>
                        <span>описание </span>
                    </div>
                </ul>
            </li>
        </div>        
    );

}

export default DetailedInfoBox;