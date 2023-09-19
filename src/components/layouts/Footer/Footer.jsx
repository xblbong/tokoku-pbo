import React from "react";

export default function Footer() {
  return (
    // <footer className="w-full bg-[#D3E7FF] p-[60px] text-center">
    //   <div className="flex justify-center gap-6 items-center mb-[30px]">
    //     <h3 className="font-semibold text-[20px]">About</h3>
    //     <h3 className="font-semibold text-[20px]">Help</h3>
    //   </div>
    //   <div>
    //     <h3 className="font-normal text-[20px]">Copy Right 2023 Kasir</h3>
    //   </div>
    // </footer>
    <footer className="bg-[#E6F1FF] p-20">
      <div className="flex justify-between">
        <div className="flex gap-x-14">
          <div>
            <h2 className="font-bold text-[20px] leading-10">Toko Ku</h2>
            <p className="text-[16px] leading-7">Section</p>
            <p className="text-[16px] leading-7">Section</p>
            <p className="text-[16px] leading-7">Section</p>
          </div>
          <div>
            <h2 className="font-bold text-[20px] leading-10">Toko Ku</h2>
            <p className="text-[16px] leading-7">Section</p>
            <p className="text-[16px] leading-7">Section</p>
            <p className="text-[16px] leading-7">Section</p>
          </div>
          <div>
            <h2 className="font-bold text-[20px] leading-10">Toko Ku</h2>
            <span className="flex gap-x-10">
              <img src="" alt="img" />
              <img src="" alt="img" />
              <img src="" alt="img" />
            </span>
          </div>
        </div>
        <div>
          <div className="w-[350px] p-[30px] rounded-lg font-bold text-[20px] text-center bg-[#6CADFF] mb-6">
            Banner
          </div>
          <span className="flex gap-x-10 justify-center">
            <button className="bg-[#9FCAFF] px-12 py-3 rounded-lg ">button1</button>
            <button className="bg-[#9FCAFF] px-12 py-3 rounded-lg ">button2</button>
          </span>
        </div>
      </div>
    </footer>
  );
}
