import React from "react";
import { Box } from "@material-ui/core";
import NavBar from "./NavBar";
export default function Layout({ children, title }) {
  return (
    <Box
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar title={title} />
      <Box
        style={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
