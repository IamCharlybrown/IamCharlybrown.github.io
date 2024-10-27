import React, { useState } from "react";
import { Avatar, Button } from "antd";
import { useNavigate } from "react-router-dom"; // Importar useNavigate

const AvatarConfig = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Inicializar useNavigate

  const handleProfileClick = () => {
    navigate('/perfil'); // Cambiar a la ruta de perfil
  };

  return (
    <div
      style={{
        padding: "10px",
        borderRadius: "16px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", 
        border: "2px solid #3B3B3B", 
        display: "inline-block", 
      }}
    >
      <Avatar
        style={{
          backgroundColor: "#f56a00",
          verticalAlign: "middle",
        }}
        size="large"
      >
        {user}
      </Avatar>
      <Button
        size="middle"
        style={{
          margin: "0 16px",
          verticalAlign: "middle",
          color: "white",
          backgroundColor: "#161616"
        }}
        onClick={handleProfileClick} // Llamar a la función de clic
      >
        Profile
      </Button>
    </div>
  );
};

export default AvatarConfig;
