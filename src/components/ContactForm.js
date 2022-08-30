import React from 'react';
import emailjs from '@emailjs/browser';
import {useState, useRef} from "react";


const Result = () => {
    return (
        <p>Votre message a bien été envoyé. Notre équipe va bientôt vous contacter.</p>

    )
}

const ContactForm = (props) => {

    const form = useRef();

    const [result, showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ggnf9io', 'template_uhydw28', form.current, 'g92EDi7GAjJpn8a6u')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
        showResult(true);

    };

    return (
        <div className={'lg:p-12 px-8 py-6'}>
            <form action="" className={'flex flex-col space-y-6'} ref={form} onSubmit={sendEmail}>

                <div className={'flex flex-col'}>
                    <label>
                        Your name
                    </label>
                    <input type="text" name="fullName"/>
                </div>

                <div className={'flex flex-col'}>
                    <label>
                        Your mail
                    </label>
                    <input type="mail" name="email"/>
                </div>

                <div className={'flex flex-col'}>
                    <label>
                        Message
                    </label>
                    <textarea name="message" id="message" rows="5" placeholder={'Message'}></textarea>
                </div>

                <input type="submit" value="Send a message" className={'bg-timeRed hover:bg-timeRedHover transition duration-300  px-4 py-3 rounded-[30px] shadow-lg shadow-timeRed/50'}/>

                <div> {result ? <Result/> : null} </div>
            </form>
            
        </div>
    );
};

export default ContactForm;
