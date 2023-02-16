import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'
import AppTheme from './Colors'

const Header = ({ handleCity, inputCity, handleKeyDown, handleCombinedEvents }) => {
    const theme = useContext(ThemeContext)[0]
    const currentTheme = AppTheme[theme]
    return (
        <header className='heading' style={{
            background: `${currentTheme.Headerbackground}`,
            color: `${currentTheme.Headerforeground}`
        }}>
            <h1 className='weatherHeading'>Weather Finder</h1>
            <input className='inputWeather'
                type='text'
                value={inputCity}
                placeholder='Enter the City'
                onChange={handleCity}
                onKeyDown={handleKeyDown}
                list="suggestions"
            />
            <button type='submit'
                className='buttonWeather'
                onClick={handleCombinedEvents} >Search</button>
        </header>
    )
}
export default Header