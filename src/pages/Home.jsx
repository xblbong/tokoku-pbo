import React from "react";
import Header from "../components/layouts/Header/Header";
import Footer from "../components/layouts/Footer/Footer";
import Banner from "../components/Banner/Banner";
import SwiperComponent from "../components/Swiper/Swiper";
import Cards from "../components/Card/Cards";

const cardDataKategori1 = [
  { id: 1, title: "Card 1" },
  { id: 2, title: "Card 2" },
  { id: 3, title: "Card 3" },
  { id: 4, title: "Card 4" },
  { id: 5, title: "Card 5" },
  // ... dan seterusnya
];
const cardDataKategori2 = [
  { id: 1, title: "Card 1" },
  { id: 2, title: "Card 2" },
  { id: 3, title: "Card 3" },
  { id: 4, title: "Card 4" },
  { id: 5, title: "Card 5" },
  // ... dan seterusnya
];

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <SwiperComponent />
      <div className="border-t-4 border-[#DEDEDEEE] mx-16 pt-[60px] pb-10">
        <button className="text-[20px] border-2 border-[#DEDEDEEE] bg-[#F5F5F5] px-7 py-2 rounded-2xl mb-7">
          Kategori 1
        </button>
        <div className="flex  justify-evenly gap-x-16 flex-wrap">
          {cardDataKategori1.map((data, index) => (
            <div key={index} className="w-1/6 mb-10">
              <Cards key={data.id} title={data.title} />
            </div>
          ))}
        </div>
      </div>
      <div className="border-t-4 border-[#DEDEDEEE] mx-16 py-[60px]">
        <button className="text-[20px] border-2 border-[#DEDEDEEE] bg-[#F5F5F5] px-7 py-2 rounded-2xl mb-7">
          Kategori 2
        </button>
        <div className="flex  justify-evenly gap-x-16 flex-wrap">
          {cardDataKategori2.map((data, index) => (
            <div key={index} className="w-1/6 mb-10">
              <Cards key={data.id} title={data.title} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
