import React from "react";
import { Tab, Tabs, TabPanels, TabPanel, TabList } from "@chakra-ui/react";
import ProyectForm from "../Proyects/ProyectForm";
import ProyectList from "../Proyects/ProyectsList";
import TasksList from "./Tasks/TasksList";
import TasksForm from "./Tasks/TasksForm";

function NavBar() {
  return (
    <Tabs>
      <TabList mb="1em">
        <Tab>Proyectos</Tab>
        <Tab>Tareas</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ProyectForm></ProyectForm>
          <ProyectList></ProyectList>
        </TabPanel>
        <TabPanel>
          <TasksForm></TasksForm>
          <TasksList></TasksList>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default NavBar;
