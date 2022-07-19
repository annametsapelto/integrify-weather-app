import Header from './header';
import Form from './form';
import WeatherCard from './weatherCard';
import FailureBox from './failureBox';

function Layout() {
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