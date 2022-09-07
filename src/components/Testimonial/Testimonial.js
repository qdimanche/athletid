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

            <div className={'lg:grid grid-cols-4 grid-rows-2 gap-6 hidden'}>
                {TestimonialCardData.slice(0,12).map((val, ind) =>{
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

            <div className={'grid lg:grid-cols-4 md:grid-cols-2 gap-6 lg:hidden md:grid hidden '}>
                {TestimonialCardData.slice(0,6).map((val, ind) =>{
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

            <div className={'gap-6 md:hidden grid'}>
                {TestimonialCardData.slice(0,3).map((val, ind) =>{
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
