import 'antd/dist/antd.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import LayoutComponent from '../component/Layout';
import '../styles/globals.css';



function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    
        <div>
        <Head>
        <meta name="description" content="Africa’s one-stop marketplace for all things production" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <title>Azaman</title>
        </Head>

       
          <LayoutComponent>
          <Component {...pageProps} />
          </LayoutComponent>
        </div>
     
  );
}

export default MyApp;
