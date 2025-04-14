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

    const cargarUsuarios = () => {
        fetch('http://localhost:8080/api/usuarios')
            .then(res => res.json())
            .then(data => setUsuarios(data))
            .catch(error => console.error('Error al obtener usuarios:', error));
    };

    useEffect(() => {
        cargarUsuarios();
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/api/usuarios/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                alert('Usuario eliminado correctamente');
                cargarUsuarios();
            })
            .catch(error => console.error('Error al eliminar usuario:', error));
    };

    const handleUpdate = (id, updatedData) => {
        fetch(`http://localhost:8080/api/usuarios/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        })
            .then(res => res.json())
            .then(() => {
                alert('Usuario actualizado correctamente');
                cargarUsuarios();
            })
            .catch(error => console.error('Error al actualizar usuario:', error));
    };

    return (
        <>
            <h2>¡Bienvenido, {username}!</h2>

            <button onClick={handleLogout} className="btn btn-danger">
                Cerrar sesión
            </button>
            <div className="container mt-5">
                <h2 className="mb-4">Administacion de usuarios y passwords</h2>
                <UsuariosTable
                    usuarios={usuarios}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}
                />
            </div>
        </>
    )
}
