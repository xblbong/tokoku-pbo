import { Button } from "antd";
import React from "react";

export default function FormLR(props) {
  const {Img, Title, textButton, desc, link, nameLink } = props;
  return (
    <>
      <div className="flex justify-evenly gap-x-20 my-14">
        <div>
          <img src={Img} alt="icon" className="w-[524px]" />
        </div>
        {/* <FormLR/> */}
        <section>
          <div className="w-[550px] bg-[#fff] text-center border-2 border-[#D9D9D9] mb-[22px] rounded-xl">
            <div className="p-10">
              <h1 className="text-center text-[35px] font-semibold text-[#0071FF] mb-[43px]">
                {Title}
              </h1>
              <input
                type="text"
                placeholder="Username or email"
                className="p-5 border-[#D9D9D9] rounded-2xl bg-[#F5F5F5] text-[#949494] font-semibold text-[14px] mb-[6px] w-[400px]"
              />
              <br />
              <input
                type="text"
                placeholder="Password"
                className="p-5 border-[#D9D9D9] rounded-2xl bg-[#F5F5F5] text-[#949494] font-semibold text-[14px] w-[400px] mb-[26px]"
              />
              <Button
                type="submit"
                className="p-2 rounded-lg bg-[#6CAEFF] text-[#F5F5F5] font-semibold text-[20px] h-[50px] w-[400px] mb-7"
              >
                {textButton}
              </Button>

              <h3 className="text-[#595959] font-light text-[16px]">
                Lupa Password ?
              </h3>
            </div>
          </div>
          {/* belum punya akun */}
          <div className="p-5 gap-[21px] flex justify-center border-2 border-[#D9D9D9] w-[550px] rounded-xl">
            <h3>{desc}</h3>
            <a href={link} className="text-[#6CAEFF]">
              {nameLink}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
