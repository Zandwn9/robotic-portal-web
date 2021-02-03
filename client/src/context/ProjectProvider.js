import React, { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { getProjectsList } from "../firebase/firestore/projects";
export const ProjectContext = createContext({});

export const ProjectProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [projects, setProjects] = useState([]);
  const [currentProjectId, setCurrentProjectId] = useState(null);
  useEffect(() => {
    if (user) {
      getProjectsList(user).then((projects) => setProjects(projects));
    }
  }, [user]);

  return (
    <ProjectContext.Provider
      value={{ projects, setProjects, currentProjectId, setCurrentProjectId }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
