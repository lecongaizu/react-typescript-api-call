import React, { useState, useEffect, FC } from "react";
import GoogleMapReact from "google-map-react";
import { WeatherData } from '../store/types';
import "../css/style.css";
const APIKEY = "";

interface MapProps {
    data: WeatherData;
}

const Maps: FC<MapProps> = ({ data }) => {
    const [zoom, setZoom] = useState(13);
    const center = {
        lat: data.coord.lat,
        lng: data.coord.lon
    }

    return (
        <div style={{ height: "54vh", width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: APIKEY }}
                center={center}
                defaultZoom={zoom}
            >
            </GoogleMapReact>
        </div>
    );
};

export default Maps;
