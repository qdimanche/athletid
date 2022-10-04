import React from 'react';
import Image1 from '../../assets/images/masonry/pexels-allan-mas-5384013.webp'


const MasonryGrid = () => {


    return (
        <div className={'flex space-x-4 mx-[-10%] mt-[-12%]'}>
            <div className={'space-y-4 w-[12%]'}>
                <img className={'object-cover h-[400px] w-full rounded-[30px]'} src={Image1} alt=""/>
                <img className={'object-cover h-[400px] w-full rounded-[30px]'} src={Image1} alt=""/>
                <img className={'object-cover h-[225px] w-full  rounded-[30px]'} src={Image1} alt=""/>
                <img className={'object-cover h-[350px] w-full rounded-[30px]'} src={Image1} alt=""/>
                <img className={'object-cover h-[275px] w-full rounded-[30px]'} src={Image1} alt=""/>
            </div>
            <div className={'space-y-4 mt-[190px] w-[12%]'}>
                <img className={'object-cover h-[275px] w-full rounded-[30px]'} src={Image1} alt=""/>
                <img className={'object-cover h-[350px] w-full rounded-[30px]'} src={Image1} alt=""/>
                <img className={'object-cover h-[240px] w-full  rounded-[30px]'} src={Image1} alt=""/>
            </div>
            <div className={'space-y-4 mt-[300px] w-[20%]'}>
                <img className={'object-cover h-[350px] w-2/3 rounded-[30px]'} src={Image1} alt=""/>
                <img className={'object-cover h-[420px] w-full rounded-[30px]'} src={Image1} alt=""/>
                <img className={'object-cover h-[300px] w-full  rounded-[30px]'} src={Image1} alt=""/>

            </div>
            <div className={'space-y-4 mt-[400px] w-[12%]'}>
                <img className={'object-contain rounded-[30px]'} src={Image1} alt=""/>
                <img className={'object-contain rounded-[30px]'} src={Image1} alt=""/>
            </div>
            <div className={'space-y-4 mt-[220px] w-[12%]'}>
                <img className={'object-contain rounded-[30px] '} src={Image1} alt=""/>
                <img className={'object-cover h-[200px] w-full rounded-[30px]'} src={Image1} alt=""/>
                <img className={'object-contain rounded-[30px]'} src={Image1} alt=""/>
                <img className={'object-contain rounded-[30px]'} src={Image1} alt=""/>
            </div>
            <div className={'space-y-4 mt-[320px] w-[20%]'}>
                <img className={'object-contain rounded-[30px]'} src={Image1} alt=""/>
                <img className={'object-contain rounded-[30px]'} src={Image1} alt=""/>
            </div>
            <div className={'space-y-4 mt-[170px] w-[12%]'}>
                <img className={'object-contain rounded-[30px]'} src={Image1} alt=""/>
                <img className={'object-contain rounded-[30px]'} src={Image1} alt=""/>
                <img className={'object-contain rounded-[30px]'} src={Image1} alt=""/>
                <img className={'object-contain rounded-[30px]'} src={Image1} alt=""/>
            </div>



        </div>
    );
};

export default MasonryGrid;
