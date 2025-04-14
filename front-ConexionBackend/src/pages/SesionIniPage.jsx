import React from 'react'
import { useNavigate } from 'react-router-dom';
import { getUserSession, clearUserSession } from '../utils/session';
import { UsuariosTable } from '../components/UsuariosTable';
import { useEffect, useState } from 'react';

export const SesionIniPage = () => {

    const [usuarios, setUsuarios] = useState([]);
    const username = getUserSession();
    const navigate = useNavigate();

    const handleLogout = () => {
        clearUserSession();
        navigate('/');
    };

    useEffect(() => {
        fetch('http://localhost:8080/api/usuarios')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los usuarios');
                }
                return response.json();
            })
            .then(data => setUsuarios(data))
            .catch(error => console.error('Error en la petición:', error));
    }, [])

    return (
        <>
            <h2>¡Bienvenido, {username}!</h2>

            <button onClick={handleLogout} className="btn btn-danger">
                Cerrar sesión
            </button>
            <div className="container mt-5">
                <h2 className="mb-4">Dashboard</h2>
                <UsuariosTable usuarios={usuarios} />
            </div>
        </>
    )
}
