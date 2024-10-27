import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom"; // Importa Link para la navegación
import AvatarConfig from "./AvatarConfig";

function CreateRoutineMenu() {
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
            <h1 className="text-xl font-bold">Categorías</h1>
          <Menu.Item key="1" style={{ color: "#ffffff" }}>
            <Link to="/create-routine">Pecho</Link>
          </Menu.Item>
          <Menu.Item key="2" style={{ color: "#ffffff" }}>
            <Link to="/muscle-groups">Espalda</Link>
          </Menu.Item>
          <Menu.Item key="3" style={{ color: "#ffffff" }}>
            <Link to="/progress-stats">Pierna</Link>
          </Menu.Item>
          <Menu.Item key="4" style={{ color: "#ffffff" }}>
            <Link to="/exercise-categories">Bicep</Link>
          </Menu.Item>
          <Menu.Item key="5" style={{ color: "#ffffff" }}>
            <Link to="/workout-notes">Tricep</Link>
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
            <Link to="/"> {'<'}--back</Link>
          </Menu.Item>
          
        </div>
      </Menu>
    </>
  );
}

export default CreateRoutineMenu;
