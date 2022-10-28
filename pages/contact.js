import ContactForm from '../components/contact-form'

export default function Contact() {
    return (
        <div className='h-[80%] lg:w-[80%] lg:mx-auto'>
            <div className='select-none text-center m-2 font-bold text-6xl text-slate-200'>Contact Me</div>
            <div className='grid grid-cols-3 h-full'>
                <div className='border-2 border-slate-800'>
                    <div className='text-center h-1/3 flex justify-center flex-col select-none'>
                        <img src='/linkedin-in.svg' className='h-8 w-8 mx-auto'/>
                        <h1 className='font-bold'>Linkedin</h1>
                        <p>Check me out <a href='https://www.linkedin.com/in/phoenix-coln/' className='text-cyan-800'>here</a></p>
                    </div>
                    <div className='text-center h-1/3 flex justify-center flex-col select-none'>
                        <img src='/github.svg' className='h-8 w-8 mx-auto'/>
                        <h1 className='font-semibold'>Github</h1>
                        <p>Check me out <a href='https://github.com/pc0ln' className='text-cyan-800'>here</a></p>
                    </div>
                    <div className='text-center h-1/3 flex justify-center flex-col select-none'>
                        <img src='/house-solid.svg' className='h-8 w-8 mx-auto'/>
                        <h1 className='font-semibold'>I'm located in</h1>
                        <p>Dallas, TX</p>
                    </div>
                </div>
                <ContactForm />
            </div>
        </div> 
        )
  }