import React from "react";
import logo from "../assets/circleLogo.png";
import theme from "../styles/theme";

export default function LogoContainer({ children }) {
  return (
    <div
      style={{
        backgroundColor: theme.palette.secondary.dark,
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        width: "100vh",
        padding: "8rem",
        backgroundImage: `url(${logo})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
}
