import React from "react";
import { Carousel } from "antd";

const carouselStyle = {
  height: "100vh", // Ubah tinggi Carousel sesuai kebutuhan
};

const contentStyle = {
  height: "100vh", // Gunakan tinggi maksimum konten untuk mengisi Carousel
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
          <h3 style={contentStyle}>
            <img
              src="/banner/banner5.png"
              className="w-full"
              alt=""
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              src="/banner/banner2.png"
              className="w-full"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              src="/banner/banner3.png"
              className="w-full"
              alt=""
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              src="/banner/banner4.png"
              className="w-full"
              alt=""
            />
          </h3>
        </div>
      </Carousel>
    </div>
  );
}
