import { useState, useEffect } from 'react';
import axios from 'axios';
import './Styles/card.css';

function WeatherCard( {locationKey, cityName}) {
    const [data, setData] = useState(null);
    const [showCard, setShowCard] = useState(false);

    useEffect(() => {
        setShowCard(false);
        setData(null);
        console.log("location key in card: " + locationKey);
        if(locationKey !== undefined) {        
            axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=988RYIGWsNefHEZGGmWa42dbtjR5yWwm`)
        .then((response) => {
            console.log("fetching data");
            setData(response.data[0]);
            setShowCard(true);
        })
        .catch(error => {
            <p>Sorry, loading failed!</p>
        })
    }}, [locationKey], [data])

            return (
                <>
                {showCard &&(
                <div className="card">
                    <h4>{cityName}</h4>
                    <div>
                        <p className="temperature">{Math.ceil(data.Temperature.Metric.Value)}
                            <sup>&deg;{data.Temperature.Metric.Unit}</sup>
                        </p>
                        <p className="weatherText">{data.WeatherText}</p>

                    </div>
                </div>)  
                    }
                {!showCard && (
                    <p>Loading...</p>
                )} 
                </>
                ) 

}

export default WeatherCard;