import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRegister = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { username, password };

        try {
            const response = await fetch('http://localhost:8080/api/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
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

    return {
        username,
        setUsername,
        password,
        setPassword,
        handleSubmit,
    };
};
