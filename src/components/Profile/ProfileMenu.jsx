import React, { useState } from 'react';

function ProfileMenu() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gymName, setGymName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleProfilePictureChange = (e) => {
    setProfilePicture(URL.createObjectURL(e.target.files[0]));
  };

  const handleSaveChanges = () => {
    // Aquí puedes agregar la lógica para guardar los cambios
    console.log('Guardando cambios:', {
      name,
      email,
      gymName,
      phoneNumber,
      age,
      profilePicture,
    });
  };

  return (
    <div className="bg-[#2E2E2E] p-4 rounded-lg text-white">
      <h2 className="text-xl mb-4">Personalizar Perfil</h2>
      <div className="flex items-center mb-4">
        {/* Imagen de perfil centrada y más grande */}
        <div className="flex flex-col items-center mr-4">
          {profilePicture ? (
            <img
              src={profilePicture}
              alt="Perfil"
              className="w-32 h-32 rounded-full border border-gray-500 mb-2" // Tamaño incrementado
            />
          ) : (
            <div className="w-32 h-32 rounded-full border border-gray-500 flex items-center justify-center text-gray-400 mb-2">
              Sin imagen
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
            className="text-white"
          />
        </div>

        {/* Campos de texto para datos personales */}
        <div className="flex flex-col flex-grow">
          <label className="text-gray-400 mb-1">Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingresa tu nombre"
            className="bg-[#3A3A3A] p-2 rounded mb-4 text-white"
          />
          <label className="text-gray-400 mb-1">Correo Electrónico:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo"
            className="bg-[#3A3A3A] p-2 rounded mb-4 text-white"
          />
          <label className="text-gray-400 mb-1">Nombre del Gimnasio:</label>
          <input
            type="text"
            value={gymName}
            onChange={(e) => setGymName(e.target.value)}
            placeholder="Ingresa el nombre del gimnasio"
            className="bg-[#3A3A3A] p-2 rounded mb-4 text-white"
          />
          <label className="text-gray-400 mb-1">Número Telefónico:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Ingresa tu número telefónico"
            className="bg-[#3A3A3A] p-2 rounded mb-4 text-white"
          />
          <label className="text-gray-400 mb-1">Edad:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Ingresa tu edad"
            className="bg-[#3A3A3A] p-2 rounded mb-4 text-white"
          />
        </div>
      </div>

      {/* Botón para guardar cambios */}
      <button
        onClick={handleSaveChanges}
        className="bg-[#161616] p-2 rounded text-white w-full hover:bg-[#2E2E2E]"
      >
        Guardar Cambios
      </button>
    </div>
  );
}

export default ProfileMenu;
