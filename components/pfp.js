import React, { useState } from 'react'
import Image from 'next/image'
import pfp from '../public/pfp.jpg'
import drown from '../public/drown.JPG'
import {motion} from 'framer-motion'

const Profile = () => {
    const [isSwitch, setIsSwitch] =useState(false)
    
    return (<motion.div
      initial={{
        scale:0
      }}
      animate={{
        scale:1
      }}
      transition={{
        duration:.5
      }}
      className='border-2 border-red-600 flex justify-center w-60 mt-10 mx-auto'>
        <Image 
          src={isSwitch ? drown:pfp}
          alt='picture of me'
          layout='fixed'
          height={200}
          width={200}
          className='rounded-full'
          onClick={() => setIsSwitch(!isSwitch)}
        />  
      </motion.div>)
}

export default Profile;