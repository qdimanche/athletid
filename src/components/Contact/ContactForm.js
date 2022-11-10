import React, {useEffect} from 'react';
import emailjs from '@emailjs/browser';
import {useState, useRef} from "react";
import {FaChevronUp} from "react-icons/fa";


const Result = () => {
    return (
        <p>Votre message a bien été envoyé. Notre équipe va bientôt vous contacter.</p>

    )
}

const ContactForm = (props) => {

    const form = useRef();

    const [result, showResult] = useState(false);
    const [open, setOpen] = useState(false);
    const [childOpen, setChildOpen] = useState(false);
    const [countTab, setCountTab] = useState(0);
    const [countChildTab, setCountChildTab] = useState(0);

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

    const blockHidden = document.querySelectorAll('#blockHidden');










    return (



        <div data-scroll-section data-scroll className={'grid lg:grid-cols-2 grid-cols-1 lg:space-y-0 space-y-14 lg:space-x-10 lg:p-12 px-8 py-6 mt-28  '}>
            <div className={'h-full'}>
                <div className={'w-full bg-[#242629] flex justify-between p-5 h-fit rounded-[10px]'}>
                    <p >Lorem ipsum dolor sit amet, consectetur</p>
                    <FaChevronUp className={open && countTab === 1?'rotate-180 duration-700':'duration-700'} onClick={()=> {
                        setOpen(!open);
                        setCountTab(1);
                    }}/>
                </div>

                <div className={open && countTab === 1?'space-y-4 my-4':'h-4 duration-1000'}>
                    <div className={open && countTab === 1?'opacity-1 ml-20 duration-1000 bg-[#242629] opacity-50 p-5 rounded-[10px] max-h-[1000px] visible':'ml-20 opacity-0 invisible max-h-0 '}>
                        <div className={"flex justify-between"}>
                            <p className={open?'opacity-1 duration-1000':'opacity-0 '}>ba</p>
                            <FaChevronUp className={childOpen && countChildTab === 1?'rotate-180 duration-700':'duration-700'} onClick={() =>{
                                setChildOpen(!childOpen)
                                setCountChildTab(1);
                            }}/>
                        </div>
                        {
                            countChildTab === 1 ?
                                <p className={childOpen ?'opacity-1 duration-[1000ms] max-h-[1000px] visible pt-5':'invisible opacity-0 duration-1000 max-h-0'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nunc sed elementum dolor. Curabitur cursus lacus id
                                    porta gravida. Suspendisse eget commodo est.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    nunc sed.</p>
                                : ''
                        }

                    </div>
                    <div className={open && countTab === 1?'opacity-1 ml-20 duration-1000 bg-[#242629] opacity-50 p-5 rounded-[10px] h-auto max-h-[1000px] visible':'ml-20 opacity-0 invisible max-h-0'}>
                        <div className={"flex justify-between"}>
                            <p className={open?'opacity-1 duration-1000':'opacity-0 '}>ba</p>
                            <FaChevronUp className={childOpen && countChildTab === 2?'rotate-180 duration-700':'duration-700'} onClick={() =>{
                                setChildOpen(!childOpen)
                                setCountChildTab(2);
                            }}/>
                        </div>
                        {
                            countChildTab === 2 ?
                                <p className={childOpen ?'opacity-1 duration-[1000ms] max-h-[1000px] visible pt-5':'invisible opacity-0 duration-1000 max-h-0'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nunc sed elementum dolor. Curabitur cursus lacus id
                                    porta gravida. Suspendisse eget commodo est.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    nunc sed.</p>
                                : ''
                        }

                    </div>
                    <div className={open && countTab === 1?'opacity-1 ml-20 duration-1000 bg-[#242629] opacity-50 p-5 rounded-[10px] h-auto max-h-[1000px] visible':'ml-20 opacity-0 invisible max-h-0'}>
                        <div className={"flex justify-between"}>
                            <p className={open?'opacity-1 duration-1000':'opacity-0 '}>ba</p>
                            <FaChevronUp className={childOpen && countChildTab === 3?'rotate-180 duration-700':'duration-700'} onClick={() =>{
                                setChildOpen(!childOpen)
                                setCountChildTab(3);
                            }}/>
                        </div>
                        {
                            countChildTab === 3 ?
                                <p className={childOpen ?'opacity-1 duration-[1000ms] max-h-[1000px] visible pt-5':'invisible opacity-0 duration-1000 max-h-0'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nunc sed elementum dolor. Curabitur cursus lacus id
                                    porta gravida. Suspendisse eget commodo est.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    nunc sed.</p>
                                : ''
                        }

                    </div>
                </div>



                <div className={'w-full bg-[#242629] flex justify-between p-5 h-fit rounded-[10px]'}>
                    <p >Lorem ipsum dolor sit amet, consectetur</p>
                    <FaChevronUp className={open && countTab === 2?'rotate-180 duration-700':'duration-700'} onClick={()=> {
                        setOpen(!open);
                        setCountTab(2);
                    }}/>
                </div>

                <div className={open && countTab === 2?'space-y-4 my-4':'h-4 duration-1000'}>
                    <div className={open && countTab === 2?'opacity-1 ml-20 duration-1000 bg-[#242629] opacity-50 p-5 rounded-[10px] max-h-[1000px] visible':'ml-20 opacity-0 invisible max-h-0 '}>
                        <div className={"flex justify-between"}>
                            <p className={open?'opacity-1 duration-1000':'opacity-0 '}>ba</p>
                            <FaChevronUp className={childOpen && countChildTab === 4?'rotate-180 duration-700':'duration-700'} onClick={() =>{
                                setChildOpen(!childOpen)
                                setCountChildTab(4);
                            }}/>
                        </div>
                        {
                            countChildTab === 4 ?
                                <p className={childOpen ?'opacity-1 duration-[1000ms] max-h-[1000px] visible pt-5':'invisible opacity-0 duration-1000 max-h-0'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nunc sed elementum dolor. Curabitur cursus lacus id
                                    porta gravida. Suspendisse eget commodo est.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    nunc sed.</p>
                                : ''
                        }

                    </div>
                    <div className={open && countTab === 2?'opacity-1 ml-20 duration-1000 bg-[#242629] opacity-50 p-5 rounded-[10px] h-auto max-h-[1000px] visible':'ml-20 opacity-0 invisible max-h-0'}>
                        <div className={"flex justify-between"}>
                            <p className={open?'opacity-1 duration-1000':'opacity-0 '}>ba</p>
                            <FaChevronUp className={childOpen && countChildTab === 5?'rotate-180 duration-700':'duration-700'} onClick={() =>{
                                setChildOpen(!childOpen)
                                setCountChildTab(5);
                            }}/>
                        </div>
                        {
                            countChildTab === 5 ?
                                <p className={childOpen ?'opacity-1 duration-[1000ms] max-h-[1000px] visible pt-5':'invisible opacity-0 duration-1000 max-h-0'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nunc sed elementum dolor. Curabitur cursus lacus id
                                    porta gravida. Suspendisse eget commodo est.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    nunc sed.</p>
                                : ''
                        }

                    </div>
                    <div className={open && countTab === 2?'opacity-1 ml-20 duration-1000 bg-[#242629] opacity-50 p-5 rounded-[10px] h-auto max-h-[1000px] visible':'ml-20 opacity-0 invisible max-h-0'}>
                        <div className={"flex justify-between"}>
                            <p className={open?'opacity-1 duration-1000':'opacity-0 '}>ba</p>
                            <FaChevronUp className={childOpen && countChildTab === 6?'rotate-180 duration-700':'duration-700'} onClick={() =>{
                                setChildOpen(!childOpen)
                                setCountChildTab(6);
                            }}/>
                        </div>
                        {
                            countChildTab === 6 ?
                                <p className={childOpen ?'opacity-1 duration-[1000ms] max-h-[1000px] visible pt-5':'invisible opacity-0 duration-1000 max-h-0'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nunc sed elementum dolor. Curabitur cursus lacus id
                                    porta gravida. Suspendisse eget commodo est.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    nunc sed.</p>
                                : ''
                        }

                    </div>
                </div>








            </div>

            <div className={''}>
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

                    <input type="submit" value="Send a message" className={'bg-timeRed hover:bg-timeRedHover transition duration-300  px-4 py-3 rounded-[30px] shadow-lg shadow-timeRed/50 w-1/2 self-end'}/>

                    <div> {result ? <Result/> : null} </div>
                </form>

            </div>


        </div>


    );
};

export default ContactForm;
