import React from "react";
import Header from "../components/layouts/Header/Header";
import Footer from "../components/layouts/Footer/Footer";

function PesananAnda() {
  return (
    <>
      <Header />
      <div className="mx-14 bg-[#fff] h-full px-14 py-16">
        <section>
          <div className="flex justify-between border-b pb-5">
            <h2 className="bg-[#F5F5F5] w-[200px] px-10 py-2 rounded-lg">
              Pesanan Anda
            </h2>
            <h2 className="bg-[#F5F5F5] w-[150px] px-10 py-2 rounded-lg">
              text
            </h2>
          </div>
        </section>

        <section>
          <div className="w-[1000px] h-full border-2 border-[#cbcaca] bg-[#F5F5F5] rounded-lg mx-auto mt-14 p-10">
            <h3 className="text-[16px]">Produk</h3>
            <span className="flex justify-between mt-5">
              <h3 className="text-[16px]">Risol Mayo Frozen Food</h3>
              <span className="flex gap-x-20">
                <h3 className="text-[16px]">1 x</h3>
                <p className="text-[16px]">Rp. 3.500</p>
              </span>
            </span>
            <br />
            Mohon lakukan pembayaran sebesar Rp.3.500 saat menerima produk
            <br />
            <br />
            <br />
            <hr />
            <h3 className="text-[16px] mt-5">Jasa Kirim</h3>
            <span className="flex justify-between mt-5">
              <h3 className="text-[16px]">Jalur Express Rahmatullah</h3>
              <span className="flex gap-x-20">
                <p className="text-[16px]">Rp. dibayar pahala sajah</p>
              </span>
            </span>
            <br />
            <br />
            <hr />
            <span className="flex justify-between mt-5">
              <h3 className="text-[20px]">Total Pembayaran</h3>
              <span className="flex gap-x-20">
                <p className="text-[16px]">Rp. 50.000</p>
              </span>
            </span>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default PesananAnda;
