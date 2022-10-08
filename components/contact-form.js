import React, { useState} from "react";


export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
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
        setSubject("");
        setMessage("");
        console.log(formData);
    };

    
    return (
        <form onSubmit={handleSubmit}>
            <div className="border-2">
                <label htmlFor="name">Enter name:</label>
                <input type='text' onChange={(e) => {
                    setName(e.target.value);
                }} name="name" value={name}/>
            </div>
            <div className="border-2">
                <label htmlFor="email">Enter email:</label>
                <input type='text' onChange={(e) => {
                    setEmail(e.target.value);
                }} name="email" value={email}/>
            </div>
            <div className="border-2">
                <label htmlFor="subject">Enter subject:</label>
                <input type='text' onChange={(e) => {
                    setSubject(e.target.value);
                }} name="subject" value={subject}/>
            </div>
            <div className="border-2">
                <label htmlFor="message">Enter message:</label>
                <textarea onChange={(e) => {
                    setMessage(e.target.value);
                }} name="message" value={message}></textarea>
            </div>
            <div>
                <button type="submit" className="border-2">send</button>
            </div>
        </form>
    );
};