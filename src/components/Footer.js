import React from 'react';
import {FaFacebook, FaInstagram, FaTiktok, FaYoutube} from "react-icons/fa";


const Footer = React.forwardRef((props, ref) => {
    return (




        <div ref={ref} data-scroll-section className={'pb-24'}>

            <div className={'mb-48 flex flex-col items-center'}>

                <div className={'w-1/3 text-center pt-20'}>
                    <h3 className={'text-center'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                    <form action="" className={'relative w-full mt-12 '}>
                        <input type="email" placeholder={'Ajouter votre email ici'} className={'w-full absolute z-1 left-0 !p-[25px] bg-white border rounded-[45px] border-black/10'} />
                        <button type="submit" className={'absolute z-2 right-[18px] top-[18px] w-fit bg-timeRed hover:bg-timeRedHover transition duration-300  px-8 py-3 rounded-[30px] circle-boxShadow text-white'}>S'inscrire</button>
                    </form>
                </div>

            </div>




            <div className={'mx-80 flex'}>
                <div className={'w-1/4 flex flex-col'}>
                    <a className={'text-[1.2em]'} style={{textDecoration:'underline'}} href="mailto:contact@athletid.com">info@athletid.com</a>
                    <p className={'text-black/30'}>Lille, France</p>
                </div>


                <div className={'w-3/4 flex flex-col items-end space-y-2'}>
                    <div className={'flex space-x-4'}>
                        <FaYoutube color={'black'}/>
                        <FaFacebook color={'black'}/>
                        <FaInstagram color={'black'}/>
                        <FaTiktok color={'black'}/>
                    </div>
                    <p className={'text-black/30'}>Privacy Policy</p>
                </div>

            </div>





        </div>
    );
})

export default Footer;
