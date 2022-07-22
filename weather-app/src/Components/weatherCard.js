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
    const [icon, setIcon]  = useState('');

    useEffect(() => {
        setShowCard(false);
        setData(null);
        if(locationKey !== undefined) {        
            axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=988RYIGWsNefHEZGGmWa42dbtjR5yWwm`)
        .then((response) => {
            setData(response.data[0]);
            getWeatherIcon(response.data[0].WeatherText);
            setShowCard(true);
            console.log(icon);
        })
        .catch(error => {
            <p>Sorry, loading failed!</p>
        })
    }}, [locationKey], [data])

    function getWeatherIcon(text) {
        if (text === 'Partly sunny') {
            setIcon({halfcloud});
        }
        if (text === 'Sunny') {
            setIcon({sunny});
        }
        if (text === 'Cloudy') {
            setIcon({cloudy});
        }
        if (text === 'Rainy') {
            setIcon({rain});
        }
        if (text === 'Snowy') {
            setIcon({snow});
        }
        if (text === 'Thunder') {
            setIcon({lightning});
        }
        else {
            setIcon({cloudy});
        }
    }
            return (
                <>
                {showCard &&(
                <div className="card">
                    
                    <div>
                        <h4>{cityName}</h4>
                        <img src={icon} alt="Weather Icon"/>
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