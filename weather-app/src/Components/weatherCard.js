import { useState, useEffect } from 'react';
import axios from 'axios';
import './Styles/card.css';
import cloudy from '../Images/cloudy.png';
import halfcloud from '../Images/halfcloud.png';
import lightning from '../Images/lightning.png';
import rain from '../Images/rain.png';
import snow from '../Images/snow.png';
import sunny from '../Images/sunny.png';

function WeatherCard( {locationKey, cityName}) {
    const [data, setData] = useState(null);
    const [showCard, setShowCard] = useState(false);
    const [weatherText, setWeatherText] = useState('');

    useEffect(() => {
        setShowCard(false);
        setData(null);
        if(locationKey !== undefined) {        
            axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=988RYIGWsNefHEZGGmWa42dbtjR5yWwm`)
        .then((response) => {
            setData(response.data[0]);
            setWeatherText(response.data[0].WeatherText);
            setShowCard(true);
        })
        .catch(error => {
            <p>Sorry, loading failed!</p>
        })
    }}, [locationKey], [data])

    function getWeatherIcon() {
        if (weatherText === 'Partly sunny' || weatherText === 'Mostly sunny') {
            return <img src={halfcloud} alt="Partly sunny"/>;
        }
        if (weatherText === 'Sunny' || weatherText === 'Mostly clear' || weatherText === 'Clear') {
            return <img src={sunny} alt="Sunny"/>;
        }
        if (weatherText === 'Cloudy') {
            return <img src={cloudy} alt="Cloudy"/>;
        }
        if (weatherText === 'Rainy') {
            return <img src={rain} alt="Rainy"/>;
        }
        if (weatherText === 'Snowy') {
            return <img src={snow} alt="Snowy"/>;
        }
        if (weatherText === 'Thunder') {
            return <img src={lightning} alt="Thunder"/>;
        }
        else {
            return <img src={cloudy} alt="Cloudy"/>;
        }
    }

            return (
                <>
                {showCard && locationKey &&(
                <div className="card">
                    
                    <div>
                        <h4>{cityName}</h4>
                        {getWeatherIcon()}
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