const API_URL = 'http://localhost:8080/api/usuarios';

export const obtenerUsuarios = async () => {
    const res = await fetch(API_URL);
    return await res.json();
};

export const eliminarUsuario = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};

export const actualizarUsuario = async (id, data) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return await res.json();
};
