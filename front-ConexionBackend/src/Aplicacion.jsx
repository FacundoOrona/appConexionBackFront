import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { SesionIniPage } from './pages/SesionIniPage';

export const Aplicacion = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/inicio" element={<SesionIniPage />} />
      </Routes>
    </Router>
  )
}
