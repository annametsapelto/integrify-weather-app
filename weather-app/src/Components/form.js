import { useState } from 'react';

function Form() {
    const [cityName, setCityname] = useState('');
    const handleSubmit = (event) => {
      event.preventDefault();
      setCityname('');
    }

    return (
        <div>
            <h3>Enter the city below</h3>
            <form onSubmit={event => handleSubmit(event)}>
                <label for="city">City:</label>
                <input type="text" id="city" onChange={e => setCityname(e.target.value)} value={cityName}></input>
                <input type="submit" value="Search"></input>
            </form>
            <p>{cityName}</p>
        </div>
    )
}

export default Form;