import { useState } from 'react';
import Header from './header';
import Form from './form';
import Result from './result';

function Layout() {
    const [cityName, setCityname] = useState('');

    const addCityName = (name) => {
        setCityname(name);
    }

    return (
        <div>
            <Header></Header>
            <Form addCityName = {addCityName}></Form>
            <Result cityName={cityName}></Result>
        </div>
    )
}

export default Layout;