import Head from 'next/head'
import Navbar from '../components/navbar'
import Profile from '../components/pfp'
import {motion} from 'framer-motion'


export default function Home() {
  return (
    <div className='bg-neutral-300 h-auto '>
      <Head>
        <title>Phoenix's Portfolio</title>
      </Head>
      <Navbar />
      {/** Hero/Head section */}
      <Profile />
      <div className='flex flex-col sm:flex-row border-2 border-blue-600 h-auto items-center sm:justify-around'>
        <div className='block sm:inline-block h-auto w-60 my-4 rounded-lg shadow-md'>
          <h1 className='block font-extrabold border-b-2 border-red-500 text-center text-lg'>About</h1>
          <p className='m-2 text-center font-medium font-mono'>I'm Phoenix and I am currently a student studying software engineering. I'm interested in a variety of specialties like web development, mobile development, and more technical aspects like machine learning and artifiical intelligence</p>
        </div>
        <div className='block sm:inline-block h-60 w-60 my-4 rounded-lg shadow-lg'>
        <h1 className='block font-extrabold border-b-2 border-red-500 text-center text-lg'>About</h1>
          <p className='m-2 text-center font-semibold'>I'm Phoenix and I am currently a student studying software engineering. I </p>
        </div>
      </div>

      {/** An about section */}
      
    </div>
  )
}
