import React from 'react';
import TestimonialCard from "./TestimonialCard";
import TestimonialCardData from "./TestimonialCardData";

const Testimonial = () => {
    return (
        <div>
            <div className={'text-center mb-12'}>
                <h2>Lorem ipsum dolor</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className={'grid lg:grid-cols-4 md:grid-cols-3 grid-rows-3 gap-6'}>
                {TestimonialCardData.map((val, ind) =>{
                    return(
                        <TestimonialCard
                         key={ind}
                         imgsrc={val.imgsrc}
                         name={val.name}
                         surname={val.surname}
                         publicationDate={val.publicationDate}
                         comment={val.comment}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default Testimonial;
