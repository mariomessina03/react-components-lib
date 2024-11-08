import React from "react";

export default function Badge({ children, color = "gray", shape = "square" }) {
  const allClasses = `badge ${color} ${shape}`;
  return <div className={allClasses}> {children} </div>;
}
