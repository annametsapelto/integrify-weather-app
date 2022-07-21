
function WeatherCard( {data, cityName}) {

    return (
        <div>
            <h4>Here is the weather for {cityName}</h4>
            <p>Here is data {data[0]}</p>
            {!data && <div>
                <p>{data[0].WeatherText}</p>
                <p>{Math.ceil(data[0].Temperature.Metric.Value)}
                    <sup>&deg;{data[0].Temperature.Metric.Unit}</sup>
                </p>
            </div>}
        </div>
    )
}

export default WeatherCard;