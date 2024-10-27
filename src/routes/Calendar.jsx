import React from "react";
import { Layout, theme } from "antd";
import MenuComponent from "../components/MenuComponent";

const { Header, Content, Footer, Sider } = Layout;

const Calendar = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Define la rutina con los días y su respectiva actividad
  const routineDays = [
    { day: "Lunes", activity: "Pecho" },
    { day: "Martes", activity: "Espalda" },
    { day: "Miércoles", activity: "Pierna" },
    { day: "Jueves", activity: "Descanso" },
    { day: "Viernes", activity: "Pecho / Espalda" },
    { day: "Sábado", activity: "Pierna" },
    { day: "Domingo", activity: "Descanso" },
  ];

  // Horas para el eje Y
  const hours = Array.from({ length: 12 }, (_, i) => `${i + 6} AM`);

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
          <div className="w-full h-full bg-[#161616] rounded-lg shadow-md">
            <div className="grid grid-cols-8 text-center text-white bg-gray-800 rounded-t-lg">
              <div className="p-4 border border-gray-700">Hora</div>
              {routineDays.map((item) => (
                <div key={item.day} className="p-4 border border-gray-700">
                  <h2 className="font-bold">{item.day}</h2>
                </div>
              ))}
            </div>
            {hours.map((hour) => (
              <div key={hour} className="grid grid-cols-8 text-center">
                <div className="p-4 border border-gray-700 bg-gray-900 text-white">
                  {hour}
                </div>
                {routineDays.map((item) => (
                  <div
                    key={item.day}
                    className="p-4 border border-gray-700 text-white"
                    style={{
                      background: item.day === "Jueves" || item.day === "Domingo"
                        ? "#4A4A4A" // Color para días de descanso
                        : "#3B3B3B", // Color para otros días
                    }}
                  >
                    {item.activity}
                  </div>
                ))}
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

export default Calendar;
