import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect, useState } from "react";
import { currentWeatherAction } from "../redux/slices/weatherSlices";

function TopBar() {
    const [textInput, getTextInput] = useState();
    const [darkTheme, switchTheme] = useState();
    const dispatch=useDispatch();
    const state = useSelector((state)=>state);
    console.log(state);

    const onClickHandler = () => {
        //dispatch(getCityName.getCityName(textInput));
        dispatch(currentWeatherAction({city: textInput}));
    };
    const themeSwitcher = (isDark) =>{
        if (isDark===true) {
            switchTheme(false);
        }
        else{
            switchTheme(true);
        }
    }
    const themeSwitchHandler = (isDark)=>{
        if (isDark===false) {
            document.documentElement.classList.add('dark');
        }
        else{
            document.documentElement.classList.remove('dark');
        }
    }

    useEffect(()=>{
        themeSwitchHandler(darkTheme)
    },[darkTheme])

    return(
        <div className="p-5 inline-flex w-screen justify-between">
            <div className="inline-flex">
                <div>иконка </div>
                <div className="mx-2">название </div>
            </div>   
            <div className="inline-flex">
                <div className="mx-2"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.9 px-2 rounded" onClick={()=>themeSwitcher(darkTheme)}>переключатель темы</button> </div>
                <div className="mx-2"><input className=" border " type="text" id="searchBar" placeholder="City" onChange={e=>getTextInput(e.target.value)} /></div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.9 px-2 rounded" onClick={()=>onClickHandler()}>OK</button>
            </div>
        </div>
    )
}

export default TopBar;