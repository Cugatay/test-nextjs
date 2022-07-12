import React from 'react';
import Product from '../components/Product';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const products = [
    { pic: 'resim 1', desc: 'açıklama 1' },
    { pic: 'resim 1', desc: 'açıklama 1' },
    { pic: 'resim 1', desc: 'açıklama 1' },
    { pic: 'resim 1', desc: 'açıklama 1' },
    { pic: 'resim 2', desc: 'açıklama 2' }, { pic: 'resim 3', desc: 'açıklama 3' }, { pic: 'resim 4', desc: 'açıklama 4' },
  ];
  return (
    <div className={styles.container}>
      {
        products.map((i) => (
          <Product pic={i.pic} desc={i.desc} />
        ))
      }
    </div>
  );
}
