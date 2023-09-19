import React from 'react'
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
          padding: 10
        }}
        cover={
          <img
            alt="example"
            src="/img/frozenfood.jpg"
          />
        }
      >
        <Meta title="Frozen food" description="Frozen Food Adalah Makanan Siap Saji Dan Enak untuk Dimakan Bersama" />
      </Card>
    </div>
  );
}
