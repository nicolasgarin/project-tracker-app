import React from 'react'
import logo from '../../assets/logo-celeste-circulo.svg'
import { IoMoon, IoSunny } from "react-icons/io5";
import { useUserOptions } from '../../context/UserOptionsContext';

export default function Header() {
    const { theme, toggleTheme } = useUserOptions()
    
    return (
        <header className={`header ${theme}`}>
            <div className='container d-flex align-items-center'>
                <img src={logo} className='logo' alt='project tracker logo' />
                <div className='switch-container'>
                    <IoMoon />
                    <label className="switch">
                    <input type='checkbox' checked={theme === "light"} onChange={toggleTheme} />
                    <span className="slider round" />
                    </label>
                    <IoSunny />
                </div>
            </div>
        </header>
    )
}
