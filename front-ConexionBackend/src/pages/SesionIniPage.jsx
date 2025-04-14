import React from 'react'
import { useNavigate } from 'react-router-dom';
import { getUserSession, clearUserSession } from '../utils/session';
import { UsuariosTable } from '../components/UsuariosTable';
import { useEffect, useState } from 'react';
import { obtenerUsuarios, eliminarUsuario, actualizarUsuario } from '../services/usuarioService';

export const SesionIniPage = () => {

    const [usuarios, setUsuarios] = useState([]);
    const username = getUserSession();
    const navigate = useNavigate();

    const handleLogout = () => {
        clearUserSession();
        navigate('/');
    };

    const cargarUsuarios = async () => {
        try {
            const data = await obtenerUsuarios();
            setUsuarios(data);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
        }
    };

    useEffect(() => {
        cargarUsuarios();
    }, []);

    const handleDelete = async (id) => {
        try {
            await eliminarUsuario(id);
            alert('Usuario eliminado correctamente');
            cargarUsuarios();
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
        }
    };

    const handleUpdate = async (id, updatedData) => {
        try {
            await actualizarUsuario(id, updatedData);
            alert('Usuario actualizado correctamente');
            cargarUsuarios();
        } catch (error) {
            console.error('Error al actualizar usuario:', error);
        }
    };

    return (
        <>
            <div className="container mt-5">
                <div className="d-flex justify-content-between align-items-center mb-4 p-3 bg-white shadow rounded">
                    <div>
                        <h2 className="mb-1">👋 ¡Bienvenido, <span className="text-primary">{username}</span>!</h2>
                        <p className="text-muted mb-0">Panel de administración de usuarios y contraseñas</p>
                    </div>
                    <button onClick={handleLogout} className="btn btn-outline-danger">
                        <i className="bi bi-box-arrow-right me-2"></i>
                        Cerrar sesión
                    </button>
                </div>

                <div className="card shadow p-4">
                    <h4 className="mb-4 text-center text-secondary">📋 Administración de usuarios</h4>
                    <UsuariosTable
                        usuarios={usuarios}
                        onDelete={handleDelete}
                        onUpdate={handleUpdate}
                    />
                </div>
            </div>

        </>
    )
}
