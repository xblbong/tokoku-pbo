import { Card } from "antd";
import React from "react";

export default function CustomCard(props) {
  const { cardTitle, cardDesc, cardImg, buttonText } = props;

  return (
    <Card className="w-96 border-2">
      <span className="font-bold text-[18px]">{cardTitle}</span>
      <div className="flex">
        <div className="w-1/2">
          <img src={cardImg} alt="Card" className="w-48 h-36" />
        </div>
        <div className="w-1/2 p-4">
          <p className="break-words">{cardDesc}</p>
          <div className="text-right">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
