import React from 'react'
import logo from '../../assets/logo-celeste-solo-circulo.svg'
import { useUserOptions } from '../context/UserOptionsContext';
import { IoMoon, IoSunny } from "react-icons/io5";

export default function Header() {
    const { theme, toggleTheme } = useUserOptions()
    
    return (
        <header className='header'>
            <div className='container d-flex align-items-center'>
                <img src={logo} className='logo' alt='project tracker logo' />
                <h1 className='titulo-header'>Project Tracker</h1>
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
