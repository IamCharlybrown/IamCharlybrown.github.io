import React from "react";
import { Layout, theme } from "antd";
import MenuComponent from "../components/MenuComponent";
import CreateExerciseMenu from "../components/CrearEjercicio/CreateExerciseMenu";

const { Header, Content, Footer, Sider } = Layout;

const CrearEjercicio = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

 
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
        <MenuComponent />
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
          <CreateExerciseMenu></CreateExerciseMenu>
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

export default CrearEjercicio;
