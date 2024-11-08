import React from "react";
import Badge from "./components/Badge";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Testimonial from "./components/Testimonial";
import testimage from "./assets/image.png";
import Mark from "./assets/Mark.png";

export default function App() {
  return (
    <div className="container">
      <Badge>No style</Badge>
      <Badge color="red" shape="pill">
        Hello there!
      </Badge>
      <Badge color="indigo" shape="square">
        Hello there!
      </Badge>
      <Badge color="green" shape="square">
        Pip 2
      </Badge>
      <Badge color="yellow" shape="pill">
        Hello there!
      </Badge>
      <Badge color="pink" shape="square">
        Hello there!
      </Badge>
      <Badge color="purple" shape="pill">
        Hello there!
      </Badge>

      <hr />
      <div className="banner-container">
        <Banner
          variant="success"
          title="Title and Paragraph"
          paragraph="random random random random random"
        />
        <Banner variant="success" title="Title Only" />
        <Banner
          variant="warning"
          title="Title and Paragraph"
          paragraph="random random random random random"
        />
        <Banner variant="warning" title="Title Only" />
        <Banner
          variant="error"
          title="Title and Paragraph"
          paragraph="random random random random random"
        />
        <Banner variant="error" title="Title Only" />
        <Banner
          variant="neutral"
          title="Title and Paragraph"
          paragraph="random random random random random"
        />
        <Banner variant="neutral" title="Title Only" />
      </div>

      <hr />

      <Card
        title="Easy Deployment"
        paragraph="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
      />

      <hr />

      <Testimonial
        name="Marco Merrino"
        role="Content Creator"
        image={testimage}
        textcolor="white"
        bgcolor="purple"
        secbgcolor="orange"
      >
        Ciao! Sono Marco Merrino, content creator e intrattenitore. Condivido
        ironia e riflessioni sul mondo moderno attraverso video e social, spesso
        con un pizzico di sarcasmo. Seguimi per contenuti fuori dagli schemi!
      </Testimonial>

      <Testimonial
        name="Mirco Alessandrini"
        role="Content Creator"
        mark={Mark}
        logotext="Workcation"
        textcolor="black"
        bgcolor="#89BBFE"
      >
        Ciao a tutti, sono CiccioGamer89! Appassionato di videogiochi e cibo,
        porto gameplay divertenti e sfide in cucina. Qui per condividere risate,
        trucchi e avventure!
      </Testimonial>
    </div>
  );
}
