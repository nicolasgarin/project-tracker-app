import React from 'react'
import { useUserOptions } from '../../context/UserOptionsContext'

export default function Footer() {
    const { theme, toggleTheme } = useUserOptions
    return (
        <footer className={theme}>
            <div className='container d-flex justify-content-end'>
                <div className='texto-footer'>Desarrollado por Nicolás Garín</div>
            </div>
        </footer>
    )
}
