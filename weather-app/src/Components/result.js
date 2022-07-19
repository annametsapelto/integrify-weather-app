import WeatherCard from "./weatherCard";
import FailureBox from "./failureBox";

function Result(props) {
    return (
        <div>
            <WeatherCard city={props.cityName}></WeatherCard>
            <FailureBox></FailureBox>
        </div>
    )
}

export default Result;