import ulvweatherphoto from '../image/ulvweather.png';
import controllerImage from '../image/controller.jpg';
import windVane from '../image/windVane.jpg';
import weatherBox from '../image/weatherBox.jpg';

export default function WeatherProject() {
    return (
        <div className='page'>
            <div className='row'>
                <div className='column'>
                    <h1>ULV Weather Project</h1>
                    <p className='paragraph'>
                        For my senior project at the University of La Verne, I chose to build a weather station 
                        that would record and upload the current weather data once per minute.
                    </p>
                    <p className='paragraph'>
                        The station is run by a RaspberryPi B and an Arduino Uno. A python script on the Pi collects the time, temperature,
                        humidity, air pressure, wind speed, wind direction, and rain volume once per 60 seconds. This data is then uploaded
                        to the projects database using a basic API I created.
                    </p>
                    <p className='paragraph'>
                        The PHP API reieves the data, stores it in a MySQL database, and later provides access to the 
                        data. <a href="https://ulvweather.com" target="_blank" style={{color: 'white'}}>ulvweather.com</a> uses 
                        this API to display the most recent data. The function of the API can be viewed
                        at <a href="https://api.ulvweather.com" target="_blank" style={{color: 'white'}}>api.ulvweather.com</a>
                    </p>
                    <p className='paragraph'>
                        The weather station is currently not online, but the website and API are! The most recent data will be displayed.
                        The station is now located in Valencia, CA, since I no longer live in La Verne.
                    </p>
                </div>
                <div className='column'>
                    <a href='https://ulvweather.com' target="_blank" className='blobLink'>
                        <div className='blob' style={{ width: '100%', textAlign: 'center'}}>
                            Go to Site
                        </div>
                    </a>
                    <table style={{width: 'auto'}}><tbody><tr style={{width: '100%'}}>
                        <td>
                            <img src={controllerImage} style={{height: '300px', paddingTop: '50px', paddingLeft: '5px'}}/>
                            <img src={windVane} style={{height: '300px', paddingTop: '50px', paddingLeft: '5px'}}/>
                            <img src={weatherBox} style={{height: '300px', paddingTop: '50px', paddingLeft: '5px'}}/>
                        </td>
                        </tr><tr style={{width: '100%'}}>
                        <td>
                            <img src={ulvweatherphoto} style={{height: '300px', paddingTop: '50px'}}/>
                        </td>
                    </tr></tbody></table>
                </div>
            </div>
        </div>
    );
}