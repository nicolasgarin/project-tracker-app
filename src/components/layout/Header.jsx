import React from 'react'
import logo from '../../assets/pt-logo-3.svg'

export default function Header() {
    return (
        <header className='header'>
            <div className='container d-flex align-items-center'>
            <img src={logo} className='logo' alt='project tracker logo' />
                <h1 className='titulo-header'><span className='color-1'>P</span>roject <span className='color-2'>T</span>racker</h1>
            </div>
        </header>
    )
}
