import React, { useState } from 'react';

export const UsuariosTable = ({ usuarios, onDelete, onUpdate }) => {
    const [editandoId, setEditandoId] = useState(null);
    const [editData, setEditData] = useState({ username: '', password: '' });

    const handleEditClick = (usuario) => {
        setEditandoId(usuario.id);
        setEditData({ username: usuario.username, password: usuario.password });
    };

    const handleCancelEdit = () => {
        setEditandoId(null);
        setEditData({ username: '', password: '' });
    };

    const handleSaveEdit = () => {
        onUpdate(editandoId, editData);
        setEditandoId(null);
    };

    return (
        <div className="container mt-4">
            <h3 className="mb-3">Lista de Usuarios</h3>
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>Nombre de Usuario</th>
                        <th>Contraseña</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            {editandoId === usuario.id ? (
                                <>
                                    <td>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={editData.username}
                                            onChange={(e) => setEditData({ ...editData, username: e.target.value })}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={editData.password}
                                            onChange={(e) => setEditData({ ...editData, password: e.target.value })}
                                        />
                                    </td>
                                    <td>
                                        <button className="btn btn-success btn-sm me-2" onClick={handleSaveEdit}>Guardar</button>
                                        <button className="btn btn-secondary btn-sm" onClick={handleCancelEdit}>Cancelar</button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td>{usuario.username}</td>
                                    <td>{usuario.password}</td>
                                    <td>
                                        <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditClick(usuario)}>Editar</button>
                                        <button className="btn btn-danger btn-sm" onClick={() => onDelete(usuario.id)}>Eliminar</button>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
