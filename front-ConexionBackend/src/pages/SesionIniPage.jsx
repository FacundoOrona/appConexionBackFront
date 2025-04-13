import React from 'react'

export const SesionIniPage = () => {

    const username = localStorage.getItem('username');


    return (
        <h2>¡Bienvenido, {username}!</h2>

    )
}
