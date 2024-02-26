import React from 'react'
import logo from '../../assets/logo-celeste-solo-circulo.svg'

export default function Header() {
    return (
        <header className='header'>
            <div className='container d-flex align-items-center'>
            <img src={logo} className='logo' alt='project tracker logo' />
                <h1 className='titulo-header'>Project Tracker</h1>
            </div>
        </header>
    )
}
