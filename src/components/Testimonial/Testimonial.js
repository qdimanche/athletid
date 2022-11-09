import React from 'react';
import TestimonialCard from "./TestimonialCard";
import TestimonialCardData from "./TestimonialCardData";

const Testimonial = React.forwardRef((props, ref) => {


    return (
        <div ref={ref} data-scroll data-scroll-section className={'md:mx-8 lg:min-h-[93vh] mb-16'}>
            <div className={'text-center lg:mb-12 md:pt-20 pt-16 pb-0 p-5'}>
                <h2>Lorem ipsum dolor</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className={'h-[60vh] lg:pt-0 pt-10 overflow-hidden white-inner-shadow '}>
                <div className={'lg:px-0 px-5'}>
                    <div className={'grid md:grid-cols-4 grid-cols-2 grid-rows-2 lg:gap-6 gap-3 relative z-[-2]'}>
                        {TestimonialCardData.slice(0,12).map((val, ind) =>{
                            return(
                                <TestimonialCard
                                    key={ind}
                                    imgsrc={val.imgsrc}
                                    name={val.name}
                                    surname={val.surname}
                                    publicationDate={val.publicationDate}
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
