import React from "react";
import { Card } from "antd";
const { Meta } = Card;

export default function Cards() {
  return (
    <div>
      <Card
        hoverable
        style={{
          width: 240,
          height: 350,
          padding: 20,
          paddingBottom: "-5px",
        }}
        cover={<img alt="example" src="/img/frozenfood.jpg" />}
      >
        <div className="-mx-3">
          <div className="mb-3 -mt-5">
            <Meta
              title="Frozen food"
              description="Frozen Food Adalah Makanan Siap Saji Dan Enak untuk Dimakan Bersama"
            />
          </div>
          <div className="text-center flex gap-2">
            <button className="text-[10px] w-[300px] py-2 bg-red-600 text-white rounded-[5px] ">
              <p className="text-[10px]">Tambahkan Keranjang</p>
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
