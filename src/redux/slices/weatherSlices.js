import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import weatherApi from "../../ApiFunctions/weatherApi";
import forecastApi from "../../ApiFunctions/forecastApi";
import geoApi from "../../ApiFunctions/geoApi";

const defaultState = {forecastWeather: null, currentWeather: null, currentCity: 'London'}

export const currentWeatherAction = createAsyncThunk(
    'weather/currentWeather',
    async ({city}, { state, dispatch })=>{
        console.log({city});
        const response = await weatherApi(await geoApi(city));
        return response;
    }
)

export const forecastWeatherAction = createAsyncThunk(
    'weather/forecastWeather',
    async ()=>{
        const response = await forecastApi(await geoApi(defaultState.currentCity));
        console.log(response);
        return response;
    }
)

export const searchAction = createAction(
    'weather/getCityName',
    (cityName)=>cityName,
)

const weatherSlice = createSlice({
    name: 'currenttWeather',
    initialState:defaultState,
    reducers: {getCityName: (state,action)=>{
        state.currentCity = action.payload;}
    },
    extraReducers: (builder)=>{
        builder.addCase(currentWeatherAction.pending, (state)=>{
            state.loadingStatus = 'loading';
        });
        builder.addCase(currentWeatherAction.fulfilled, (state, action)=>{
            return{
                ...state,
                currentWeather: action?.payload,
                loadingStatus: 'done',
            }
        });
        builder.addCase(currentWeatherAction.rejected, (state)=>{
            state.loadingStatus = 'rejected';
            state.currentWeather = undefined;
        });
        builder.addCase(forecastWeatherAction.pending, (state)=>{
            state.loadingStatus = 'loading';
        });
        builder.addCase(forecastWeatherAction.fulfilled, (state, action)=>{
            state.loadingStatus ='done';
            state.forecastWeather = action?.payload;
        });
        builder.addCase(forecastWeatherAction.rejected, (state)=>{
            state.loadingStatus ='rejected';
            state.forecastWeather = undefined;
        });
    }
});

export default weatherSlice.reducer;
export const getCityName= weatherSlice.actions;