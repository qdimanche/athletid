import React from 'react';
import TestimonialCard from "./TestimonialCard";
import TestimonialCardData from "./TestimonialCardData";

const Testimonial = React.forwardRef((props, ref) => {


    return (
        <div ref={ref} data-scroll data-scroll-section className={'md:mx-8 mb-16'}>
            <div className={'text-center lg:mb-12 lg:pt-6 md:pt-20 pt-16 pb-0 p-5'}>
                <h2 style={{ whiteSpace: "pre-line" }} className={'mb-3'}>{props.titleTestimonial}</h2>
                <p>{props.subTitleTestimonial}</p>
            </div>

            <div className={'h-[60vh] lg:pt-0 pt-10 overflow-hidden white-inner-shadow '}>
                <div className={'lg:px-5 md:px-0 px-5'}>
                    <div className={'grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 grid-rows-2 gap-6 relative z-[-2] rowfit-grid'}>
                        {TestimonialCardData.slice(0,12).map((val, ind) =>{
                            return(
                                <TestimonialCard
                                    key={ind}
                                    name={val.name}
                                    surname={val.surname}
                                    publicationDate={val.publicationDate}
                                    title={val.title}
                                    comment={val.comment}
                                    star={val.star}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>



        </div>
    );
})

export default Testimonial;
