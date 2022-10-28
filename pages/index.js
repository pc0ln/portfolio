import Head from 'next/head'
import Profile from '../components/pfp'
import Skills from '../components/skills'
import {motion} from 'framer-motion'


export default function Home() {
  return (
    <div className='bg-inherit'>
      <Head>
        <title>Phoenix's Portfolio</title>
      </Head>
      <div style={{backgroundImage: `url('/sunny_blur.jpg')`}}
      className='bg-cover bg-no-repeat pb-6 pt-10 flex justify-center px-auto py-200'>
        <Profile />
      </div>
      <div className='text-center md:pb-3 bg-slate-600 font-bold text-3xl md:text-6xl text-slate-200'>
        Welcome! I'm Phoenix
      </div>
      <div className='flex flex-col sm:flex-row h-auto items-center sm:justify-around mt-3'>
        <div className='bg-slate-400 block sm:inline-block h-auto w-60 lg:w-5/12 my-4 rounded-lg shadow-2xl shadow-slate-900'>
          <h1 className='block font-extrabold border-b-2 border-slate-500 text-center text-lg'>
            About Me
          </h1>
          <p className='m-2 text-center font-medium'>
            My name is Phoenix and I'm a current student studying software engineering. I'm currently learning some web development outside of class.  
          </p>
        </div>
        <div className='bg-slate-400 block sm:inline-block h-auto w-60 lg:w-5/12 my-4 rounded-lg shadow-2xl shadow-slate-900'>
        <h1 className='block font-extrabold border-b-2 border-slate-500 text-center text-lg'>
          What I'm About
        </h1>
          <p className='m-2 text-center font-semibold'>
            I am very passionate about technology and math. I have a deep interest for a wide range of topics in software like web/app development, AI/ML, and data engineering.
          </p>
        </div>
      </div>
      <div className='h-auto lg:mt-3 pb-4 lg:pb-2'>
        <div className='invisible lg:visible w-[80%] h-1 m-auto bg-slate-400 rounded'></div>
        <div className='w-[85%] m-auto border-2 mt-4 rounded bg-slate-300 shadow-2xl shadow-slate-900'>
          <h2 className='block font-extrabold border-b-2 border-slate-500 text-center text-lg'>Skills</h2>
          <p className='text-center font-semibold md:text-lg'>•	Languages: JavaScript | Python | Java | C++</p>
          <p className='text-center font-semibold md:text-lg'>•	Tech: React | React Native | NextJS | Redux | jQuery | NoSQL | MongoDB | REST API</p>

        </div>
      </div>
    </div>
  )
}
