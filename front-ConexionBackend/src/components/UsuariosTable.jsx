import React from 'react';

export const UsuariosTable = ({ usuarios }) => {
    return (
        <div className="container mt-4">
            <h3 className="mb-3">Lista de Usuarios</h3>
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>Nombre de Usuario</th>
                        <th>Contraseña</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario, index) => (
                        <tr key={index}>
                            <td>{usuario.username}</td>
                            <td>{usuario.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
