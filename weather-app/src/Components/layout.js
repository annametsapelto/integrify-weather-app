import { useState} from 'react';
import Header from './header';
import Form from './form';
import WeatherCard from './weatherCard';
import FailureBox from './failureBox';
import Recents from './recents';
import axios from 'axios';

function Layout() {
    const [cityName, setCityName] = useState('');
    const [locationKey, setLocationKey] = useState('');
    const [fetchFailed, setFetchFailed] = useState(false);
    const [haveData, setHaveData] = useState(false);

    function onSubmitForm(cityName) {
        setCityName(cityName);
        setFetchFailed(false);
        axios.get()
            .then((response) => {
                setLocationKey(response.data[0].Key);
                setHaveData(true);
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
            {locationKey && !fetchFailed && <WeatherCard locationKey={locationKey} cityName = {cityName}></WeatherCard>}
            <Recents cityName={cityName}></Recents>
        </div>
    )
}

export default Layout;