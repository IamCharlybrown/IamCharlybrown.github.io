import React, { useContext } from "react";
import { ProyectContext } from "../../context/ProyectContext";
import { DndContext } from "@dnd-kit/core";
import ProyectCard from "./ProyectCard";

function ProyectList() {
  const { proyects } = useContext(ProyectContext);

  return (
    <>
      <DndContext>
        {proyects.map((proyect) => (
          <ProyectCard key={proyect.id} proyect={proyect}/>
        ))}
      </DndContext>
    </>
  );
}

export default ProyectList;
