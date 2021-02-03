import React, { createContext, useReducer, useContext } from "react";
import reducer from "./reducers/filesReducer";
import { GO_TO_PATH, OPEN_PROJECT, MOVE_ITEM } from "./reducers/actions";
import { firestore } from "../firebase";
import firebase from "firebase/app";
import { ProjectContext } from "./ProjectProvider";
import { AuthContext } from "./AuthProvider";
import { get, set, del } from "object-path";
export const FileExplorerContext = createContext({});

export const FileExplorerProvider = ({ children }) => {
  const initialState = {
    sort: null,
    filter: null,
    path: null,
    fileStructure: null,
    items: null,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { sort, filter, path, fileStructure, items } = state;
  const { currentProjectId } = useContext(ProjectContext);
  const { user } = useContext(AuthContext);

  const openProject = (projectFileStructure) => {
    dispatch({ type: OPEN_PROJECT, payload: projectFileStructure });
  };

  const enterFolder = (folderId) =>
    dispatch({
      type: GO_TO_PATH,
      payload: `${path}${path ? "." : ""}${folderId}.contents`,
    });

  const goToFolder = (folderPath) =>
    dispatch({
      type: GO_TO_PATH,
      payload: folderPath,
    });

  const moveItem = async (sourcePath, destinationPath) => {
    const fileId = sourcePath.split(".").pop();
    const projectDoc = firestore
      .collection("clients")
      .doc(user.company)
      .collection("projects")
      .doc(currentProjectId);
    const structure = (await projectDoc.get()).data().fileStructure;
    const destinationObject = get(structure, destinationPath);
    const fileRef = get(structure, sourcePath);
    projectDoc
      .update({
        [`fileStructure${destinationPath ? "." : ""}${destinationPath}`]: {
          ...destinationObject,
          [fileId]: fileRef,
        },
      })
      .then(() =>
        projectDoc.update({
          [`fileStructure.${sourcePath}`]: new firebase.firestore.FieldValue.delete(),
        })
      )
      .then(() => {
        const tempFileStructure = { ...fileStructure };
        const destinationObjectPath = `${destinationPath}${
          destinationPath ? "." : ""
        }${fileId}`;
        set(tempFileStructure, destinationObjectPath, {
          ...get(fileStructure, sourcePath),
          id: fileId,
        });
        del(tempFileStructure, sourcePath);
        console.log(tempFileStructure);
        dispatch({
          type: MOVE_ITEM,
          payload: {
            fileStructure: tempFileStructure,
            name: get(tempFileStructure, destinationObjectPath).name,
          },
        });
      });
  };

  return (
    <FileExplorerContext.Provider
      value={{
        sort,
        filter,
        path,
        fileStructure,
        items,
        enterFolder,
        openProject,
        goToFolder,
        moveItem,
      }}
    >
      {children}
    </FileExplorerContext.Provider>
  );
};
