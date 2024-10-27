import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom"; // Importa Link para la navegación
import AvatarConfig from "./AvatarConfig";

function MenuComponent() {
  return (
    <>
      <AvatarConfig />

      <Menu
        mode="vertical"
        defaultSelectedKeys={["1"]}
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#2E2E2E",
          color: "#ffffff",
        }}
      >
        {/* Top items */}
        <div>
        <Menu.Item key="1" style={{ color: "#ffffff" }}>
            <Link to="/">Home</Link> {/* Agregada la opción Home */}
          </Menu.Item>
          <Menu.Item key="2" style={{ color: "#ffffff" }}>
            <Link to="/create-routine">Create Routine</Link>
          </Menu.Item>
          <Menu.Item key="3" style={{ color: "#ffffff" }}>
            <Link to="/calendario">Calendario</Link>
          </Menu.Item>
          <Menu.Item key="4" style={{ color: "#ffffff" }}>
            <Link to="/progress-stats">Crear Ejercicio</Link>
          </Menu.Item>
          <Menu.Item key="5" style={{ color: "#ffffff" }}>
            <Link to="/exercise-categories">Perfil</Link>
          </Menu.Item>
          <Menu.Item key="6" style={{ color: "#ffffff" }}>
            <Link to="/workout-notes">Actualizar Progreso</Link>
          </Menu.Item>
        </div>
        
        {/* Espacio en blanco para distribuir el menú */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        
        {/* Bottom items */}
        <div className="float-end">
         
          <Menu.Item key="6" style={{ color: "#ffffff" }}>
            <Link to="/login">Log In</Link>
          </Menu.Item>
        </div>
      </Menu>
    </>
  );
}

export default MenuComponent;
