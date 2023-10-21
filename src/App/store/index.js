import {configureStore} from '@reduxjs/toolkit' ;
import WeatherSlice from '../../Features/weather/WeatherSlice';

export const store = configureStore(
    {
        reducer: {
            weather :WeatherSlice 
        }
    }
) ;