import React from 'react';
import MasonryGrid from "./Masonry/MasonryGrid";
import MasonryImgSrc from "./Masonry/MasonryImgSrc";
import WhiteBorderButton from "./Buttons/WhiteBorderButton";




const MyComponent = () => {





    return (



        <div>
            <div className={"mx-8 "}>
                <div className={'text-center mt-40 relative '}>
                    <div className={'mb-20 flex flex-col items-center'}>
                        <h2>Lorem ipsum dolor</h2>
                        <p className={'mb-8'}>Lorem ipsum dolor sit amet.</p>
                        <WhiteBorderButton text={'À propos de nous'} />
                    </div>
                </div>
            </div>
            <MasonryGrid  imagesUrls={MasonryImgSrc} />
        </div>

    );
};

export default MyComponent;
