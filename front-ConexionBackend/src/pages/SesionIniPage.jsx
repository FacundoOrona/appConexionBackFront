import React from 'react'
import { useNavigate } from 'react-router-dom';
import { getUserSession, clearUserSession } from '../utils/session';

export const SesionIniPage = () => {

    const username = getUserSession();
    const navigate = useNavigate();

    const handleLogout = () => {
        clearUserSession();
        navigate('/');
    };



    return (
        <>
            <h2>¡Bienvenido, {username}!</h2>

            <button onClick={handleLogout} className="btn btn-danger">
                Cerrar sesión
            </button>
        </>
    )
}
