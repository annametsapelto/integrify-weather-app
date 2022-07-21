import { useState, useEffect } from 'react';
import axios from 'axios';

function WeatherCard( {locationKey, cityName}) {
    const [data, setData] = useState(null);
    const [showCard, setShowCard] = useState(false);
    const [weather, setWeather] = useState('');
    const [unit, setUnit] = useState('');
    const [temperature, setTemperature] = useState('');

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
                <div>
                    <h4>Here is the weather for {cityName}</h4>
                    <div>
                        <p>{data.WeatherText}</p>
                        <p>{Math.ceil(data.Temperature.Metric.Value)}
                            <sup>&deg;{data.Temperature.Metric.Unit}</sup>
                        </p>
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