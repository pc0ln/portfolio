import React, { useState} from "react";


export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {};
        Array.from(e.currentTarget.elements).forEach(field => {
            if (!field.name) return;
            formData[field.name] = field.value;
        });
        fetch('/api/send-mail', {
            method: 'post',
            body: JSON.stringify(formData)
        })

        setEmail("");
        setName("");
        setNumber("");
        setMessage("");
    };

    
    return (
        <form onSubmit={handleSubmit} className='border-2 border-slate-800 bg-slate-600 h-full col-span-2 text-slate-50'>
            <div className="text-center select-none mt-1 mb-[-2px]">Fill out the form and send me a message</div>
            <div className="flex flex-col items-center p-2 h-[15%]">
                <label htmlFor="name" className="after:content-['*'] after:ml-0.5 after:text-red-600">Enter name:</label>
                <input type='text' onChange={(e) => {
                    setName(e.target.value);
                }} name="name" value={name} className='rounded w-[75%] p-1 bg-slate-400' required/>
            </div>
            <div className="flex flex-col items-center p-2 h-[15%]">
                <label htmlFor="email" className="after:content-['*'] after:ml-0.5 after:text-red-600">Enter email:</label>
                <input type='email' onChange={(e) => {
                    setEmail(e.target.value);
                }} name="email" value={email} className='rounded bg-slate-400 w-[75%] p-1' required/>
            </div>
            <div className="flex flex-col items-center p-2 h-[15%]">
                <label htmlFor="number">Enter phone number:</label>
                <input type='text' onChange={(e) => {
                    setNumber(e.target.value);
                }} name="number" value={number} className='rounded bg-slate-400 w-[75%] p-1'/>
            </div>
            <div className="flex flex-col items-center p-2 h-2/5 ">
                <label htmlFor="message" className="after:content-['*'] after:ml-0.5 after:text-red-600">Enter message:</label>
                <textarea onChange={(e) => {
                    setMessage(e.target.value);
                }} name="message" value={message} className='mt-2 rounded bg-slate-400 resize-none w-[75%] h-full p-1' placeholder="Type your message here" required/>
            </div>
            <div className="flex justify-center mt-2">
                <button type="submit" className="bg-cyan-700 hover:bg-cyan-800 rounded-lg border-cyan-900 border-2 px-[3px] text-slate-100 w-[20%]">Send <img src='/mail-closed.svg' className=" inline h-5 w-5 pb-1"/></button>
            </div>
        </form>
    );
};