import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import Head from "next/head"
import {useEffect} from "react";
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

export default function App({ Component, pageProps }: AppProps) {

    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
      <div className="layout mb-3">
          <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <title>Index</title>
          </Head>
          <Navbar />
          <Component {...pageProps} />
          <ToastContainer />
      </div>
  )
}
