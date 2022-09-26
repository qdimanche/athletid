import React from 'react';
import MasonryGrid from "./Masonry/MasonryGrid";
import MasonryImgSrc from "./Masonry/MasonryImgSrc";


const MyComponent = () => {

    return (
        <div className={"min-h-screen mx-10"}>
            <div className={'text-center mt-40 mb-80 relative'}>
                <h2>Lorem ipsum dolor</h2>
                <p className={'mb-12'}>Lorem ipsum dolor sit amet.</p>
                <MasonryGrid  imagesUrls={MasonryImgSrc}/>
            </div>
        </div>
    );
};

export default MyComponent;
