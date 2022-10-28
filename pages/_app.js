import {motion, AnimatePresence} from 'framer-motion'
import '../styles/globals.css'
import {useRouter} from 'next/router'
import Navbar from '../components/navbar';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div className='h-screen bg-slate-700'>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
