import Navbar from '../components/navbar'
import ContactForm from '../components/contact-form'

export default function Contact() {
    return (
        <div className='bg-neutral-50 h-screen'>
            <Navbar />
            <div className='flex justify-center items-center text-2xl font-extrabold'>They changed the emoji 😭</div>
            <div className='grid grid-cols-2'>
                <div className='border-2 border-black'>
                    <div className='border-2 text-center'>
                        <h1>Linked in</h1>
                        <p>Check me out <a href='https://www.linkedin.com/in/phoenix-coln/'>here</a></p>
                    </div>
                    <div className='border-2 text-center'>
                        <h1>github</h1>
                        <p>check me out <a href='https://github.com/pc0ln'>here</a></p>
                    </div>
                    <div className='border-2 text-center'>
                        <h1>i'm located</h1>
                        <p>Dallas, TX</p>
                    </div>
                </div>
                <ContactForm />
            </div>
        </div> 
        )
  }