import React from "react";
import { Tab, Tabs, TabPanels, TabPanel, TabList } from "@chakra-ui/react";
import ProyectForm from "../Proyects/ProyectForm";
import ProyectList from "../Proyects/ProyectsList";
import TasksList from "./Tasks/TasksList";
import TasksForm from "./Tasks/TasksForm";
import CursesForm from "./Curses/CursesForm";
import CursesList from "./Curses/CursesList";
import FinishedCurses from "./Curses/FinishedCurses/FinishedCurses";

function NavBar() {
  return (
    <Tabs>
      <TabList mb="1em">
        <Tab
          fontSize="xl"
          p="1em"
          _hover={{ bg: "#E2E8F0", borderRadius: "md", fontWeight: "bold" }}
        >
          Cursos
        </Tab>
        <Tab
          fontSize="xl"
          p="1em"
          _hover={{ bg: "#E2E8F0", borderRadius: "md", fontWeight: "bold" }}
        >
          Tareas
        </Tab>
        <Tab
          fontSize="xl"
          p="1em"
          _hover={{ bg: "#E2E8F0", borderRadius: "md", fontWeight: "bold" }}
        >
          Proyectos {"(beta)"}
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <CursesForm />
          <CursesList />
        </TabPanel>
        <TabPanel>
          <TasksForm />
          <TasksList />
        </TabPanel>
        <TabPanel>
          <ProyectForm />
          <ProyectList />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default NavBar;
