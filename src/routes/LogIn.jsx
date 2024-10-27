import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook para la navegación

  const handleLogin = () => {
    // Aquí puedes implementar la lógica de inicio de sesión
    console.log('Iniciando sesión con:', { email, password });
    
    // Simulación de inicio de sesión exitoso
    if (email && password) {
      // Redirigir a la página principal
      navigate('/');
    } else {
      // Manejo de errores (si es necesario)
      console.error('Por favor, completa todos los campos.');
    }
  };

  return (
    <div className="bg-[#2E2E2E] p-6 rounded-lg w-80 mx-auto mt-20 text-white">
      <h2 className="text-2xl mb-4 text-center">Iniciar Sesión</h2>

      <div className="mb-4">
        <label className="block text-gray-400 mb-1">Correo Electrónico:</label>
        <input
          type="email"
          className="bg-[#3A3A3A] p-2 rounded text-white w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ejemplo@correo.com"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-400 mb-1">Contraseña:</label>
        <input
          type="password"
          className="bg-[#3A3A3A] p-2 rounded text-white w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
        />
      </div>

      <button
        onClick={handleLogin}
        className="bg-[#161616] p-2 rounded text-white w-full hover:bg-[#2E2E2E]"
      >
        Iniciar Sesión
      </button>

      <p className="text-center text-gray-400 mt-4">
        ¿No tienes una cuenta?{' '}
        <a href="/register" className="text-blue-500 hover:underline">
          Regístrate
        </a>
      </p>
    </div>
  );
};

export default LogIn;
