import React from 'react';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
// import Web3 from 'web3';
// import useStore from '../context';

function MyApp({ Component, pageProps }: AppProps) {
  // const web3 = new Web3('http://localhost:7545');
  // const getAccount = useStore((state: any) => state.getAccount);

  // web3.eth.getAccounts().then(console.log);

  // useEffect(() => {
  //     getAccount();
  //     console.log('hey')
  // }, [getAccount])

  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
