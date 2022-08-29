import React from 'react';

const TestimonialCard = (props) => {
    return (
        <div className={'bg-blackShade p-6 rounded-[30px] flex flex-col space-y-6'}>
            <div className={'flex space-x-3 items-center'}>
                <img src={props.imgsrc} className={'w-12 rounded-full'}/>
                <div className={'flex flex-col'}>
                    <div className={'flex space-x-2'}>
                        <p className={'font-bold text-[0.8em]'}>{props.name}</p>
                        <p className={'font-bold text-[0.8em]'}>{props.surname}</p>
                    </div>

                    <p className={'text-[0.8em]'}>{props.publicationDate}</p>
                </div>


            </div>
            <div>
                <p className={'text-[0.8em]'} >{props.comment}</p>
            </div>

        </div>
    );
};

export default TestimonialCard;
