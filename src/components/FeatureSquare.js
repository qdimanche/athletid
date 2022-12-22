import React from 'react';
import NetworkScreen01 from "../assets/images/networkScreen01.png";
import NetworkScreen02 from "../assets/images/networkScreen02.png";
import NetworkScreen03 from "../assets/images/networkScreen03.png";
import 'tw-elements';
import {BsChevronRight} from "react-icons/bs";
import {BsChevronLeft} from "react-icons/bs";


const FeatureSquare = React.forwardRef((props, ref) => {
    return (
        <div data-scroll-section data-scroll ref={ref} className={'min-h-[93vh] relative px-4  pb-16'}>
            <div className={'flex flex-col items-center lg:w-1/2 md:w-3/4 mx-auto text-center lg:mb-12 mb-8'}>
                <h2 style={{whiteSpace:"pre-line"}}>{props.titleFeatureSquare}</h2>
                <p className={'w-full mt-[10px]'}>{props.subTitleFeatureSquare}</p>
            </div>
            <div className={'md:grid hidden md:grid-cols-3 lg:gap-16 md:gap-10 gap-6 md:mb-0 mb-10 hidden'}>
                <div className={''}>
                    <div className='rounded-[30px] overflow-hidden bg-[#F2F2F2]'>
                        <img src={NetworkScreen01} className={'object-cover w-2/3 pt-14 mx-auto'} alt=""/>
                    </div>
                    <div className={'text-center mt-6 md:px-10 flex flex-col'}>
                        <span style={{whiteSpace: "pre-line"}} className={'font-normal'}>{props.titleSquare1}</span>
                    </div>
                </div>
                <div className={''}>
                    <div className='rounded-[30px] overflow-hidden bg-[#F2F2F2]'>
                        <img src={NetworkScreen02} className={'object-cover w-2/3 pt-14 mx-auto '} alt=""/>
                    </div>
                    <div className={'text-center mt-6 md:px-10 flex flex-col'}>
                        <span style={{whiteSpace: "pre-line"}} className={'font-normal'}>{props.titleSquare2}</span>
                    </div>
                </div>
                <div className={''}>
                    <div className='rounded-[30px] overflow-hidden bg-[#F2F2F2]'>
                        <img src={NetworkScreen03} className={'object-cover w-2/3 pt-14 mx-auto '} alt=""/>
                    </div>
                    <div className={'text-center mt-6 md:px-10 flex flex-col'}>
                        <span style={{whiteSpace: "pre-line"}} className={'font-normal'}>{props.titleSquare3}</span>
                    </div>
                </div>
            </div>
            <div id="carouselExampleControls" className="carousel slide relative md:hidden block w-3/4 mx-auto" data-bs-ride="carousel">
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                        <div className={'bg-black/5 pt-8 rounded-[30px] mx-6'}>
                            <img
                                src={NetworkScreen01}
                                className="block mx-auto w-fit h-[300px]"
                                alt="..."
                            />
                        </div>

                        <div className="carousel-caption text-center text-black bottom-[-100px]">
                            <p>Trouve <br/>
                                ce dont tu as besoin !</p>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <div className={'bg-black/5 pt-8 rounded-[30px] mx-6'}>
                            <img
                                src={NetworkScreen02}
                                className="block mx-auto w-fit h-[300px]"
                                alt="..."
                            />
                        </div>

                        <div className="carousel-caption text-center text-black bottom-[-100px]">
                            <p>Découvre <br/>
                                de nouveaux entraînements et conseils !</p>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <div className={'bg-black/5 pt-8 rounded-[30px] mx-6'}>
                            <img
                                src={NetworkScreen03}
                                className="block mx-auto w-fit h-[300px]"
                                alt="..."
                            />
                        </div>

                        <div className="carousel-caption text-center text-black bottom-[-100px]">
                            <p>Partage <br/>
                                tes performances et objectifs !</p>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <BsChevronLeft color={'black'} size={28} className="carousel-control-prev-icon inline-block bg-no-repeat absolute top-[150px] right-12" aria-hidden="true"></BsChevronLeft>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <BsChevronRight color={'black'}  size={28} className="carousel-control-next-icon inline-block bg-no-repeat absolute top-[150px] left-12" aria-hidden="true"/>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
})

export default FeatureSquare;
