import sendgrid from "@sendgrid/mail";
import React, { useState, useEffect } from 'react';

sendgrid.setApiKey(process.env.GRID_API_KEY);


export default function ContactMe() {
    sendgrid.setApiKey(process.env.GRID_API_KEY);
    
    const msg = {
        to: 'pcoln.contact@gmail.com',
        from: 'pcoln.contact@gmail.com',
        subject: 'chick',
        text: 'en noodle',
        html: '<strong>en noodle</strong>'
    };
    
    function SendMsg() {
        useEffect(() => {
        (async () => {
                try {
                  await sendgrid.send(msg);
                  console.log('sent')
                } catch (error) {
                  console.error(error);
              
                  if (error.response) {
                    console.error(error.response.body);
                  };
                };
              });
    
        },);
        
    };
            
    return (
        <div>
            <button onClick={SendMsg()}>chicken</button>
        </div>
    );
};