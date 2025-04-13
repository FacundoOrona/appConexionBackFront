import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const RegisterComponent = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => { //Se ejecuta cuando de click a Registrar
        e.preventDefault(); //Evita que la pagina se recargue

        const userData = { username, password };

        try {
            const response = await fetch('http://localhost:8080/api/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData), //Envio los datos al backend 
            });

            if (response.ok) { //Si el backend responde bien (código 200–299), muestra un alert de éxito
                alert('Usuario registrado con éxito');
                setUsername('');
                setPassword('');
                navigate('/');
            } else {
                alert('Error al registrar el usuario');
            }
        } catch (error) {
            console.error('Error en el fetch:', error);
            alert('Hubo un error de conexión');
        }
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                <div className="card p-4 shadow" style={{ minWidth: '300px', maxWidth: '400px', width: '100%' }}>
                    <h3 className="text-center mb-4">Registro de usuario</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Usuario</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Crea tu usuario"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Crea tu contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-success w-100">Registrarse</button>
                    </form>
                    <div className="text-center mt-3">
                        <Link to="/" className="btn btn-link">Volver al login</Link>
                    </div>
                </div>
            </div>
        </>
    );
};
