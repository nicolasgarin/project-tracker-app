import React from 'react'
import { useUserOptions } from '../../context/UserOptionsContext'

export default function Instructions() {
    const { theme, lang } = useUserOptions();
  return (
    <>
    <div className={`instructions ${theme}`}>
        <div className='container main'>
            <div>Instructions</div>
        </div>
    </div>
    </>
  )
}
