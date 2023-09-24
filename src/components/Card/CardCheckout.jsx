import { Card } from "antd";
import React from "react";

export default function CustomCard(props) {
  const { cardTitle, cardDesc, cardImg, buttonText } = props;

  return (
    <Card className="w-[500px] border-2 -px-32 mb-10 hover:shadow-lg">
      <div className="m-0">
        <span className="font-bold text-[18px]">{cardTitle}</span>
        <div className="flex">
          <div className="">
            <img src={cardImg} alt="Card" className="w-48 h-36" />
          </div>
          <div className="w-1/2 p-4 flex flex-col justify-between">
            <p className="break-words mb-3">{cardDesc}</p>
            <div className="text-right space-x-4 mt-4">
              <button className="text-[10px] mb-2 bg-red-700 text-white rounded-[5px] px-3 py-1">
                Delete
              </button>
              <button className="bg-blue-500 text-white font-bold text-[10px] rounded px-3 py-1">
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
