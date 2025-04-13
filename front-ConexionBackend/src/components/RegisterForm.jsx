import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterForm = ({ username, password, setUsername, setPassword, handleSubmit }) => {
    return (
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
    );
};
