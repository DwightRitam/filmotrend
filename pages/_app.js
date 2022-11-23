import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist'
import { useEffect, useState } from 'react'


function MyApp({ Component, pageProps }) {
  let  persistor=persistStore(store)
 
  
  
  
  return <>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
  <Navbar  />
  <Component {...pageProps} />
  <Footer/>
  </PersistGate>
  </Provider>
  </>
}

export default MyApp
