import React from "react";
import checkcircle from "../assets/checkcircle.png";
import exclamation from "../assets/exclamation.png";
import icon from "../assets/icon.png";
import xcircle from "../assets/xcircle.png";

export default function Banner({ title, paragraph, variant }) {
  const allClasses = `banner ${variant}`;

  let srcImage = "";

  if (variant === "success") {
    srcImage = checkcircle;
  }
  if (variant === "warning") {
    srcImage = exclamation;
  }
  if (variant === "neutral") {
    srcImage = icon;
  }
  if (variant === "error") {
    srcImage = xcircle;
  }

  return (
    <div className={allClasses}>
      <img src={srcImage} alt="" />
      <div>
        <h3>{title}</h3>
        {paragraph && <p>{paragraph}</p>}
      </div>
    </div>
  );
}
