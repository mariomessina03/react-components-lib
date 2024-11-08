import React from "react";
import brandicon from "../assets/brandicon.png";

export default function Card({ title, paragraph }) {
  return (
    <div className="card-container">
      <div className="card">
        <img src={brandicon} alt="" />
        <h3>{title}</h3>
        {paragraph && <p>{paragraph}</p>}
      </div>
    </div>
  );
}
