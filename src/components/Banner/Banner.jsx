import React from "react";
import { Carousel } from "antd";

const carouselStyle = {
  height: "300px", // Ubah tinggi Carousel sesuai kebutuhan
};

const contentStyle = {
  height: "230px", // Gunakan tinggi maksimum konten untuk mengisi Carousel
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#364d79",
};

export default function Banner() {
  return (
    <div style={carouselStyle}>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
}
