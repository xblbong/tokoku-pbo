import React from "react";
import { Button, Checkbox, ConfigProvider, Input, Radio } from "antd";

export default function DetailPesanan() {
  return (
    <>
      <div className="w-[384px] h-full border-2 px-9 mt-10 pb-10 rounded-lg bg-blue-400">
        <h2 className="py-6 text-white">Detail Pesanan</h2>
        <hr className=" -mt-1 w-[325px]" />
        <div className="mt-[19px] w-[326px] bg-[#fff] h-[150px] mx-auto rounded-lg">
          <h3 className="pt-6 px-5">Opsi Pengiriman</h3>
          <ConfigProvider
            theme={{
              components: {
                Radio: {
                  colorPrimary: "#00b96b",
                },
              },
            }}
          >
            <Radio className="flex px-5 mt-3">
              <div className="flex gap-x-24 ">
                <h3>Risol mayo</h3>
                <h3>Rp. 3.500 </h3>
              </div>
            </Radio>
            <br />
            <Radio className="flex px-5 -mt-3 mb-2">
              <div className="flex gap-x-24 ">
                <h3>Risol mayo</h3>
                <h3>Rp. 3.500 </h3>
              </div>
            </Radio>
          </ConfigProvider>
        </div>
        <div className="w-[326px] bg-[#fff] mt-3 p-3 rounded-lg">
          Pesan :
          <Input placeholder="Masukan Pesan Tambahan" className="rounded-lg"/>
        </div>
        <br />
        <hr className="w-[325px]"/>
        <div className="w-[326px] bg-[#fff] mt-3 p-3 rounded-lg flex justify-between">
          <h3>Total Pesanan:</h3>
          <h3>Rp. 3500</h3>
        </div>
        <Button className="flex justify-center mx-auto mt-5 bg-red-500" type="primary">Buat Pesanan</Button>
      </div>
    </>
  );
}
