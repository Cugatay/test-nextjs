import React from 'react';

interface IProduct {
  pic: string;
  desc: string;
}

export default function Product({ pic, desc }: IProduct) {
  return (
    <div style={{ marginRight: 60 }}>
      <div>{pic}</div>
      <div>{desc}</div>
    </div>
  );
}
