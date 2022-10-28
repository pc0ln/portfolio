import React, { useState } from 'react'
import Image from 'next/image'
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
      className='flex justify-center w-60 m-0'>
        <Image 
          src={isSwitch ? '/drown.JPG':'/pfp.jpg'}
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