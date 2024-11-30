import React from "react";
import { Layout, theme, Menu } from "antd";
import MenuComponent from "../components/MenuComponent";
import MyWorkouts from "../components/Home/MyWorkouts";
import WorkoutDuration from "../components/Home/WorkoutDuration";
import StyledCalendar from "../components/Home/StyledCalendar";
import MonthlyProgress from "../components/Home/MonthlyProgress";
import TrackProgress from "../components/Home/TrackProgress";

const { Header, Content, Footer, Sider } = Layout;

const Home = () => {
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)", // 4 columnas con igual tamaño
              gridGap: "20px", // Espacio entre columnas y filas
            }}
          >
            {/* Calendar */}
            <div
              style={{
                background: "#2E2E2E",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <StyledCalendar />
            </div>

            {/* My Workouts */}
            <div
              style={{
                background: "#2E2E2E",
                padding: "20px",
                borderRadius: "8px",
                gridColumn: "span 2", // Ocupa 2 columnas
              }}
            >
              <MyWorkouts />
            </div>

            {/* Monthly Progress */}
            <div
              style={{
                background: "#2E2E2E",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <MonthlyProgress />
              {/* <MonthlyProgress 1/> */}
            </div>

            <div
              style={{
                background: "#2E2E2E",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <WorkoutDuration />
            </div>

            {/* Track Progress */}
            <div
              style={{
                background: "#2E2E2E",
                padding: "20px",
                borderRadius: "8px",
                gridColumn: "span 2", // Ocupa 2 columnas
              }}
            >
              <TrackProgress />{" "}
            </div>
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

export default Home;
