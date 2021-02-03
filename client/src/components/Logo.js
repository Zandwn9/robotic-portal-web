import React from "react";
import logo from "../assets/circleLogo.png";

export default function Logo({ width, height }) {
  return <img width={width} height={height} src={logo} alt="Logo" />;
}
