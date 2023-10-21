import React from "react";
import { Card } from "react-bootstrap";
import style from "./Weather.module.scss";
import PositionSvg from "../Svgs/PositionSvg";
import DefaultWeather from "../Svgs/DefaultWeather";
import Thermometer from "../Svgs/Thermometer";
import Time from "../Svgs/Time";
import Sunny from "../Svgs/Sunny";
import Wind from "../Svgs/Wind";
import { useSelector } from "react-redux";
import Moment from 'react-moment';
const  Weather= () =>{

  const weather = useSelector(({weather})=>weather) ;
  
  return (
    <>
       <Card className={style.container}>
        {weather.isLoaded? (    <Card.Body>
         <Card.Title>
           {weather.name} {weather.sys.country}
           <span  className={style.PositionSvg} ><PositionSvg color={'#fff'} /></span>
           <div className={style.time}>
             <div>
               <Moment format={'llll'} />
             
       
             </div>
             <div>
               <Time width={"15px"} />
             </div>
           </div>
         </Card.Title>
         <Card.Text as={"div"} className={style.weaterInfo}>
           <div>
             <DefaultWeather width={"250px"} height={"250px"} />
           </div>
           <div className={style.tem}>
             <div>{weather.main.feels_like}° C</div>
             <div>
               <Thermometer />
             </div>
           </div>
           <div >
             Good Morning  {weather.name}
             <div className={style.sep}></div>
           </div>
           <div className={style.info}>
             <div className={style.sep_r}>
               <div><DefaultWeather color={'#FFF'} width={'20px'} height={'20px'} /></div>
               <div>Sunrise</div>
               <div>
              <Moment unix="true" format={'hh:mm:ss'} >
              {weather.sys.sunrise}
              </Moment>
              </div>
             </div>
             <div className={style.sep_r}>
               <div><Wind color={'#FFF'} width={'20px'} height={'20px'} /></div>
               <div>Wind</div>
               <div>{weather.wind.speed} m/s</div>
             </div>
             <div>
               <div> <Thermometer color={'#FFF'} width={'20px'} height={'20px'} /></div>
               <div>Temp</div>
               <div>{weather.main.temp_max}° C</div>
             </div>
           </div>
         </Card.Text>
       </Card.Body>):''}
     </Card>
   
    </>
  );
}
export default Weather ;