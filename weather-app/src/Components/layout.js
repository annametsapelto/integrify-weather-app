import { useState, useEffect } from 'react';
import Header from './header';
import Form from './form';
import WeatherCard from './weatherCard';
import FailureBox from './failureBox';
import axios from 'axios';

function Layout() {
    const [data, setData] = useState([]);
    const [cityName, setCityName] = useState('');
    const [locationKey, setLocationKey] = useState('');
    const [fetchFailed, setFetchFailed] = useState(false);

    function onSubmitForm(cityName) {
        setCityName(cityName);
        setFetchFailed(false);
        axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=988RYIGWsNefHEZGGmWa42dbtjR5yWwm&q=${cityName}`)
            .then((response) => {
                setLocationKey(response.data[0].Key);
                console.log("Key is: "+response.data[0].Key);
                })
        .catch(error => {
            setFetchFailed(true);
        })
        .then();
    }
    

    return (
        <div>
            <Header></Header>
            <Form onSubmitForm={onSubmitForm}></Form>
            {fetchFailed && <FailureBox></FailureBox>}
            <WeatherCard data={data} cityName = {cityName}></WeatherCard>
        </div>
    )
}

export default Layout;