import React from "react";
import { Carousel } from "3d-react-carousal";

function CarousleCards() {
  const slides = [
    <img src="images\kolegia.jpg" alt="kolegia" />,
    <img src="images\1.jpg" alt="kolegia" />,
    <img src="images\2.jpg" alt="kolegia" />,
    <img src="images\3.jpg" alt="kolegia" />,
  ];
  return (
    <div
      style={{
        width: "100vw",
        height: "50vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ height: "70%", width: "80%" }}>
        <Carousel slides={slides} autoplay={false} interval={1000} />
      </div>
    </div>
  );
}

export default CarousleCards;
