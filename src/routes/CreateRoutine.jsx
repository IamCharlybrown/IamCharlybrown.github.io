import React, { useContext } from "react";
import { Layout, theme } from "antd";

import CreateRoutineMenu from "../components/CreateRoutineMenu";
import CardExercise from "../components/CreateRoutine/CardExercise"; // Asegúrate de tener este componente
import { useRoutine } from "../context/CreateRoutineContext"; // Importa tu contexto

const { Header, Content, Footer, Sider } = Layout;

const CreateRoutine = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { userRoutine } = useRoutine();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider
        width={250}
        style={{
          background: "#2E2E2E",
          padding: "20px",
          justifyContent: "space-between",
        }}
      >
        <CreateRoutineMenu />
      </Sider>

      <Layout>
        {/* Header */}
        <Header
          style={{
            background: "#161616",
            color: "#fff",
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: "20px" }}>GymPro</div>
        </Header>

        {/* Main Content */}
        <Content
          style={{
            padding: "20px 40px",
            background: "#161616",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridGap: "20px",
            }}
          >
            {userRoutine.map((exercise) => ( // Cambiado a userRoutine
              <div
                key={exercise.id}
                style={{
                  background: "#2E2E2E",
                  padding: "20px",
                  borderRadius: "8px",
                  gridColumn: "span 2",
                }}
              >
                <CardExercise exercise={exercise} /> {/* Cambiado para pasar exercise */}
              </div>
            ))}
          </div>
        </Content>

        {/* Footer */}
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "#2E2E2E",
            color: "#fff",
          }}
        >
          GymPro ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default CreateRoutine;
