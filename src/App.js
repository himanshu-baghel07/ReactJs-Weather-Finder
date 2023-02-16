import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.css'
import Header from './Componenets/Header'
import HeroSection from './Componenets/HeroSection'
import ThemeContext from './Context/ThemeContext'

const App = () => {
  const themeHook = useState("light")
  const apiKey = 'Your_API_KEY'

  const [data, setData] = useState({})
  const [info, setInfo] = useState({})
  const [inputCity, setInputCity] = useState('')
  const [weatherType, setWeatherType] = useState({})
  const [sunRise, setSunRise] = useState({})
  const [sunSet, setSunSet] = useState({})
  const [sunriseTime, setSunriseTime] = useState('');
  const [sunsetTime, setSunsetTime] = useState('')

  const weatherDetails = (cityName) => {
    if (!cityName) return;
    const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=metric&appid=' + apiKey

    axios.get(apiUrl)
      .then((res) => {

        setData(res.data)

        const info = res.data.list[0]
        setInfo(info)

        const weatherType = res.data.list[0].weather[0]
        setWeatherType(weatherType)

        const sunRise = res.data.city.sunrise
        setSunRise(sunRise)

        const sunSet = res.data.city.sunset
        setSunSet(sunSet)
      })
      .catch((error) => {
        console.log("Error:", error);
        toast("City not found", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
  }
  const handleCity = (e) => {
    setInputCity(e.target.value)
  }
  const handleSubmit = () => {
    weatherDetails(inputCity)
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      weatherDetails(inputCity)
    }
  }
  const handleTime = () => {
    const unixTimestamp = parseInt(sunRise)
    const date = new Date(unixTimestamp * 1000)
    const localTime = date.toLocaleTimeString()
    setSunriseTime(localTime)

    const unixTimestampTwo = parseInt(sunSet)
    const dateTwo = new Date(unixTimestampTwo * 1000)
    const localTimeTwo = dateTwo.toLocaleTimeString()
    setSunsetTime(localTimeTwo)
  }

  const handleCombinedEvents = () => {
    handleTime()
    handleSubmit()
  };

  useEffect(() => {
    handleTime();
  }, [sunRise, sunSet]);

  useEffect(() => {
    weatherDetails('delhi')

  }, [])
  return (
    <div className='App'>
      <div className='main'>
        <div className='container'>
          <ThemeContext.Provider value={themeHook}>
            <Header handleCity={handleCity}
              handleSubmit={handleSubmit}
              inputCity={inputCity}
              handleKeyDown={handleKeyDown}
              handleCombinedEvents={handleCombinedEvents}
            />
            <ToastContainer />
            <HeroSection
              data={data}
              info={info}
              sunRise={sunRise}
              sunSet={sunSet}
              weatherType={weatherType}
              sunriseTime={sunriseTime}
              sunsetTime={sunsetTime}
            />
          </ThemeContext.Provider>
        </div>
      </div>
    </div>
  )
}
export default App