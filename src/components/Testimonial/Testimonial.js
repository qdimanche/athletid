import React from 'react';
import TestimonialCard from "./TestimonialCard";
import TestimonialCardData from "./TestimonialCardData";

const Testimonial = React.forwardRef((props, ref) => {


    return (
        <div ref={ref} data-scroll data-scroll-section className={'mx-8 min-h-[93vh] '}>
            <div className={'text-center mb-12'}>
                <h2>Lorem ipsum dolor</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className={'h-[60vh] overflow-hidden white-inner-shadow '}>
                <div className={'grid grid-cols-4 grid-rows-2 gap-6 relative z-[-2] '}>
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
    );
})

export default Testimonial;
