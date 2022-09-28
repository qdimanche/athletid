import React from 'react';
import Masonry from "react-masonry-css";

const MasonryGrid = (props) => {

    const breakpoints = {
        default: 6,
        1100: 2,
        700: 1
    }

    return (
        <div>
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {props.imagesUrls.map((img, i) =>
                    <div>
                        <img src={img} alt={''} key={i} className={'block w-full'}/>
                    </div>

                )}
            </Masonry>
        </div>
    );
};

export default MasonryGrid;
