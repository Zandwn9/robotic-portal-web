import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { FileExplorerProvider } from "./context/FileExplorerProvider";
import { ProjectProvider } from "./context/ProjectProvider";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ProjectProvider>
        <FileExplorerProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
              <App />
            </Router>
          </ThemeProvider>
        </FileExplorerProvider>
      </ProjectProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
