import Navbar from '../components/navbar'

export default function Contact() {
    return (
        <div className='bg-neutral-50 h-screen'>
            <Navbar />
            {/** Make a contact page with emailing */}
            <div className='flex justify-center items-center text-2xl font-extrabold'>They changed the emoji 😭</div>
            <div className='grid grid-cols-2'>
                <div className='border-2 border-black'>pee</div>
                <div className='border-2 border-black'>poo</div>
            </div>
        </div> 
        )
  }