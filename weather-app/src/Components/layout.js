import { useState } from 'react';
import Header from './header';
import Form from './form';
import WeatherCard from './weatherCard';
import FailureBox from './failureBox';

function Layout() {
    const [cityName, setCityname] = useState('');

    const addCityName = (name) => {
        setCityname(name);
    }
    
    return (
        <div>
            <Header></Header>
            <Form></Form>
            <FailureBox></FailureBox>
            <WeatherCard></WeatherCard>
        </div>
    )
}

export default Layout;