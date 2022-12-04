import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import LoadingBar from 'react-top-loading-bar'


import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }) {
  let  persistor=persistStore(store)
 
  const [progress, setProgress] = useState(0)
  const router=useRouter();

  useEffect(() => {

    router.events.on('routeChangeStart',()=>{
      setProgress(50);
    })
    
    router.events.on('routeChangeComplete',()=>{
      setProgress(100);
    })
    
  
   
  }, [])
  
  
  
  return <>
   <LoadingBar
        color='#e050bd'
        height={3}
        shadow={true}
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
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
