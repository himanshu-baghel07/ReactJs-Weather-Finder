import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa'

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext)

    return (
        <div>
            <button className='modeButton' onClick={() => {
                setThemeMode(themeMode === 'dark' ? 'light' : 'dark')
            }}
                style={themeMode === 'light' ?
                    { backgroundColor: "white", color: "black" }
                    :
                    { backgroundColor: "transparent", color: "yellow" }} >
                {themeMode === 'light' ?
                    <FaRegLightbulb className='turnOff' />
                    :
                    <FaLightbulb className='turnOn' />}
            </button>
        </div>
    )
}
export default ThemeToggler