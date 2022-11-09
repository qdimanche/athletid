import React from 'react';
import {IoStar} from "react-icons/io5";


const TestimonialCard = (props) => {

    const countStar = () => {
        let stars = [];
        for (let i = 0; i < props.star; i++) {
            stars.push(<IoStar className={'text-timeRed'} key={i}/>);
        }
        return stars;
    }


    return (
        <div id={'box'} className={'p-6 bg-[#21262B] rounded-[30px] flex flex-col space-y-6'}>
            <div className={'flex space-x-3 items-center'}>
                <img src={props.imgsrc} className={'w-12 rounded-full'} alt={'avatarPhoto'}/>
                <div className={'flex flex-col'}>
                    <div className={'flex space-x-2'}>
                        <p className={'font-bold text-[0.8em]'}>{props.name}</p>
                        <p className={'font-bold text-[0.8em]'}>{props.surname}</p>
                    </div>
                    <p className={'text-[0.8em]'}>{props.publicationDate}</p>

                </div>



            </div>

            <div className={'flex'}>
                {countStar()}
            </div>

            <div>
                <p className={'text-[0.8em]'} >{props.comment}</p>
            </div>

        </div>
    );
};

export default TestimonialCard;
