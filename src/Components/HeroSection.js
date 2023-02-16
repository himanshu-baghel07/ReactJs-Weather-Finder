import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'
import AppTheme from './Colors';
import ThemeToggler from './ThemeToggler'

const HeroSection = ({ data, info, weatherType, sunriseTime, sunsetTime }) => {
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme]

    return (
        <div className='body' style={{
            background: `${currentTheme.Herobackground}`,
            color: `${currentTheme.Heroforeground}`,
            textAlign: "center"
        }}>
            <div className="content">
                <ThemeToggler />
                <form>
                    <p className='city'>{data?.city?.name}, {data?.city?.country}</p>
                    <p className='temperature'>{Math.round(info?.main?.temp)}°C</p>
                    <p className='description'>({weatherType?.description})</p>
                    <p className='minTemperature'>Min. Temperature: {info?.main?.temp_min}°C</p>
                    <p className='maxTemperature'>Max. Temperature: {info?.main?.temp_max}°C</p>
                    <p className='humidity'>Humidity: {info?.main?.humidity}%</p>
                    <p className='wind'>Wind: {info?.wind?.speed} km/h</p>
                    <p className='pressure'>Pressure: {info?.main?.pressure} hpa</p>
                    <p className='sunrise'>Sunrise: {sunriseTime} AM</p>
                    <p className='sunset'>Sunset: {sunsetTime} PM</p>
                </form>
            </div>
        </div>
    )
}
export default HeroSection