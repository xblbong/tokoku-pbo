import React from "react";
import Header from "../components/layouts/Header/Header";
import Footer from "../components/layouts/Footer/Footer";
import CardCheckout from "../components/Card/CardCheckout";

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

        <section className="py-10">
            <CardCheckout cardImg="/img/frozenfood.jpg" cardTitle="Frozen Food" cardDesc="Nikmati kesegaran kapan saja dengan makanan beku pilihan kami."/>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
