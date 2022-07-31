import { useState, useEffect } from 'react';

function Recents( {key, city}) {
    const [cityArray, setCityArray] = useState([{"city": '', "key": ''}]);

useEffect(() => {
    let newCity = [{"city": city, "key": key}];
    console.log("Recents");
    if (cityArray.length < 1) {
        setCityArray({...cityArray, ...newCity})
        console.log("Array is: " + cityArray)
    }
    if (doesNotContainCity(newCity)) {
        if (cityArray.length < 10) {
            setCityArray({...cityArray, ...newCity})
        }
        else {
            let tempArray = cityArray;
            tempArray.pop();
            
        }

    }

}, [cityArray], [city])

    function doesNotContainCity(newCity) {
        for (let i in cityArray) {
            if (cityArray[i] === newCity) {
                return false;
            } else {
                return true;
            }
        }
    }

    return (
        <div>
            <h4>Recent searches:</h4>
            <ul>
                <li></li>
            </ul>
        </div>
    )
}

export default Recents;