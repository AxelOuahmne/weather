import React, { useState } from 'react';
import {Button, Form} from 'react-bootstrap';
import style from './SearchBar.module.scss'
import {Autocomplete,TextField} from '@mui/material'
import { useDispatch } from 'react-redux'
import { setDate } from '../../Features/weather/WeatherSlice';

  const SearchBar = () =>{
    const [cities,setCities]= useState([]);
    const GEO_API_KEY = process.env.REACT_APP_GEO_API_KEY ;
    const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API ;
    const dispatch = useDispatch()
    const [unity ,setUnity] = useState('metric')
    const handelInputChange = (e)=> {
      const {value} = e.currentTarget ;
      fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&type=city&format=json&apiKey=${GEO_API_KEY}`)
      .then(response=>response.json())
      .then(json=>setCities(json.results.map(data=>{
        const {city,country,lon,lat ,formatted}= data 
       return {city,country,lon,lat,formatted}
       })));
     
    }
    const handelSelect = (e,value) =>{
      console.log(e,value);
      const {lon,lat} = value ;
      console.log(lon,lat)
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&units=${unity}&lon=${lon}&appid=${WEATHER_API_KEY}`)
      .then(response=>response.json())
      .then(json=> {
        const {clouds,main,name,sys,weather,wind} =json ;
        dispatch(setDate({clouds,main,name,sys,weather,wind}));
      });
     

    }
  return (
            <>
              <Form>
                    <Form.Group className={style.serachContainer}>

                        <Autocomplete 
                          className={style.sercheInput} 
                          clearOnBlur={false}
                          getOptionLabel={(e)=>e.formatted}
                          onChange={handelSelect}
                          renderInput={
                              (params)=>
                              <TextField {...params} label={'Entre your City ..'} onChange={handelInputChange} /> 
                                      }
                         options={cities}
                        
                        />

                        <Button variant='primary' size='sm'  className={style.btn_serche}>Search</Button>
                    </Form.Group>
                
              </Form>
            </>
  )
}
export default SearchBar ;