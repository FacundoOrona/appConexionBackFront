import React from 'react';
import { useRegister } from '../hooks/useRegister';
import { RegisterForm } from './RegisterForm';

export const RegisterComponent = () => {
    const {
        username,
        setUsername,
        password,
        setPassword,
        handleSubmit,
    } = useRegister();

    return (
        <RegisterForm
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
        />
    );
};

/*¿Cómo están conectados?
RegisterComponent importa el hook personalizado useRegister que maneja la lógica.

Pasa los datos y funciones como props al RegisterForm.

RegisterForm se encarga de mostrar el formulario y ejecutar handleSubmit.*/
