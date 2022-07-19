import { useState } from 'react';

function Form(props) {
    const [cityName, setCityname] = useState('');
    const handleSubmit = (event) => {
      event.preventDefault();
      setCityname('');
      props.addCityName(cityName);
    }

    return (
        <div>
            <h3>Enter the city below</h3>
            <form onSubmit={event => handleSubmit(event)}>
                <label>City: 
                    <input type="text" id="city" onChange={e => setCityname(e.target.value)} value={cityName}></input>
                </label>
                <input type="submit" value="Search"></input>
            </form>
        </div>
    )
}

export default Form;