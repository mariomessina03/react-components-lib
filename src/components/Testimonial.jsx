import React from "react";
import virgoletta from "../assets/virgoletta.png";
import dotpat from "../assets/dotpat.png";

export default function Testimonial({
  children,
  image,
  name,
  role,
  mark,
  logotext,
  textcolor,
  bgcolor = "orangered",
  secbgcolor,
}) {
  const textColor = { color: textcolor };
  const bgColor = { background: bgcolor };
  const secBgColor = { background: secbgcolor || bgcolor };

  const bgImage = {
    backgroundColor: bgcolor,
    backgroundImage: `url(${dotpat})`,
    backgroundSize: "241px 298px",
    backgroundPosition: "left bottom",
    backgroundRepeat: "no-repeat",
  };

  return image ? (
    <div className="testimonial-container" style={bgColor}>
      <div className="testimonial-img-cont" style={secBgColor}>
        <img src={image} className="profile-pic" />
      </div>

      <div className="testimonial-desc" style={textColor}>
        <img src={virgoletta} className="virgoletta" />
        <h3>{children}</h3>
        <footer>
          <p className="name">{name}</p>
          <p className="role">{role}</p>
        </footer>
      </div>
    </div>
  ) : (
    <div className="testimonial-container-ni" style={bgImage}>
      <div className="testimonial-desc-ni" style={textColor}>
        <div className="logo">
          <img src={mark} />
          <h1>{logotext}</h1>
        </div>
        <h3>{children}</h3>
        <footer className="footer-ni">
          <p className="name-ni">{name} /</p>
          <p className="role-ni">{role}</p>
        </footer>
      </div>
    </div>
  );
}
