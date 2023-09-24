import React from "react";
import Header from "../components/layouts/Header/Header";
import Footer from "../components/layouts/Footer/Footer";
import CardCheckout from "../components/Card/CardCheckout";
import DetailPesanan from "../components/DetailPesanan/DetailPesanan";

const cardData = [
  {
    cardImg: "/img/frozenfood.jpg",
    cardTitle: "Frozen Food 1",
    cardDesc: "Deskripsi Frozen Food 1",
    buttonText: "Tambah Barang ",
  },
  {
    cardImg: "/img/frozenfood.jpg",
    cardTitle: "Frozen Food 2",
    cardDesc: "Deskripsi Frozen Food 2",
    buttonText: "Tambah Barang ",
  },
  {
    cardImg: "/img/frozenfood.jpg",
    cardTitle: "Frozen Food 3",
    cardDesc: "Deskripsi Frozen Food 3",
    buttonText: "Tambah Barang ",
  },
  {
    cardImg: "/img/frozenfood.jpg",
    cardTitle: "Frozen Food 4",
    cardDesc: "Deskripsi Frozen Food 4",
    buttonText: "Tambah Barang ",
  },
  {
    cardImg: "/img/frozenfood.jpg",
    cardTitle: "Frozen Food 5",
    cardDesc: "Deskripsi Frozen Food 5",
    buttonText: "Tambah Barang ",
  },
  // Tambahkan data card lainnya sesuai kebutuhan
];

function Checkout() {
  return (
    <>
      <Header />
      <div className="mx-14 bg-[#fff] h-full px-14 py-16">
        <section>
          <div className="flex justify-between border-b pb-5">
            <h2 className="bg-[#F5F5F5] w-[150px] px-10 py-2 rounded-lg">
              keranjang
            </h2>
            <h2 className="bg-[#F5F5F5] w-[150px] px-10 py-2 rounded-lg">
              text
            </h2>
          </div>
        </section>

        <section className="flex justify-evenly gap-x-72">
          <div className="py-10">
            {cardData.map((data, index) => (
              <CardCheckout
                key={index}
                cardImg={data.cardImg}
                cardTitle={data.cardTitle}
                cardDesc={data.cardDesc}
                buttonText={data.buttonText}
              />
            ))}
          </div>
          <DetailPesanan />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
