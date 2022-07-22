import { useState } from 'react';
import './Styles/form.css';

function Form(props) {
    const [cityName, setCityname] = useState('');
     
    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmitForm(cityName);
    }

    return (
        <div className="cityForm">
            <h3>Enter the city below</h3>
            <form onSubmit={event => handleSubmit(event)}>
                <label>City:  <input type="text" id="city" onChange={e => setCityname(e.target.value)} value={cityName}></input>
                </label>
                <button type="submit" value="Search">Search</button>
            </form>
        </div>
    )
}


export default Form;