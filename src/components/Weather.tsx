import React, { FC } from 'react';
import { WeatherData } from '../store/types';
import {withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Maps from "./Map";
interface WeatherProps {
  data: WeatherData;
}

// Using render Wether information
const Weather: FC<WeatherProps> = ({ data }) => {
  console.log("data", data.coord);
  const location = data.coord;
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const celsius = (data.main.temp - 273.15).toFixed(2);

  return(
    <section className="section">
      <div className="container" style={{width: 1435, height:300}}>
        <h1 className="title has-text-centered" style={{marginBottom: 50, marginLeft:650}}>{data.name} - {data.sys.country}</h1>
        <div className="map">
          <Maps data={data} />
        </div>
        <div className="level" style={{alignItems: 'flex-start', marginLeft:710, marginTop:-215}}>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">{data.weather[0].description}</p>
              <p className="title"><img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt=""/></p>
            </div>
          </div>
          <div className="level-item has-text-centered" style={{marginLeft:8}}>
            <div>
              <p className="heading">temp</p>
              <div className="title">
                {/* <p className="mb-2">{data.main.temp}K</p>
                <p className="mb-2">{fahrenheit}<sup>&#8457;</sup></p> */}
                <p>{celsius}<sup>&#8451;</sup></p>
              </div>
            </div>
          </div>
          <div className="level-item has-text-centered" style={{marginLeft:8}}>
            <div>
              <p className="heading">humidity</p>
              <p className="title">{data.main.humidity}</p>
            </div>
          </div>
          <div className="level-item has-text-centered" style={{marginLeft:8}}>
            <div>
              <p className="heading">pressure</p>
              <p className="title">{data.main.pressure}</p>
            </div>
          </div>
          <div className="level-item has-text-centered" style={{marginLeft:8}}>
            <div>
              <p className="heading">wind</p>
              <p className="title">{data.wind.speed} m/s</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Weather;