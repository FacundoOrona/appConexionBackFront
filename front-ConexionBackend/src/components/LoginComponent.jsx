import React from 'react'
import { Link } from 'react-router-dom'

export const LoginComponent = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                <div className="card p-4 shadow" style={{ minWidth: '300px', maxWidth: '400px', width: '100%' }}>
                    <h3 className="text-center mb-4">Iniciar sesión</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Usuario</label>
                            <input type="text" className="form-control" id="username" placeholder="Ingresa tu usuario" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
                    </form>
                    <div className="text-center mt-3">
                        <small>¿No tienes una cuenta?</small>
                        <br />
                        <Link to="/register" className="btn btn-link">Registrarse</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
