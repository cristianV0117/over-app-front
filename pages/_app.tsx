import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import type { AppProps } from 'next/app'
import Head from "next/head"
import {useEffect} from "react";
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Navbar from "../components/layout/Navbar"
import {useRouter} from "next/router";
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;

export default function App({ Component, pageProps }: AppProps) {

    const router = useRouter()

    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js')
        canvasChanges()
    }, []);

    const canvasChanges = () => {
        let closeCanvas = document.querySelector('[data-bs-dismiss="offcanvas"]')
        router.events.on('routeChangeComplete', () => {
            // @ts-ignore
            closeCanvas.click()
        })

        let changeCanvas = document.getElementsByClassName("change-canvas")
        // @ts-ignore
        for (let i = 0; i < changeCanvas.length; i++) {
            changeCanvas[i].addEventListener('click', () => {
                // @ts-ignore
                closeCanvas.click()
            })
        }
    }

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
