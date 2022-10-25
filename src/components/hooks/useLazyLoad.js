import React, {useEffect} from 'react';

const config = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0
}


function UseLazyLoad(props) {


    useEffect(() => {
        let observer = new window.IntersectionObserver(function (entries, self) {

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    loadImages(entry.target);
                    self.unobserve(entry.target);
                }

            })
        }, config);


        const imgs = document.querySelectorAll("[data-src]");
        imgs.forEach((img) => {
            observer.observe(img);
        });

        return () => {
            imgs.forEach((img) => {
                observer.unobserve(img);
            })
        }

    })

    function loadImages(image) {
        image.src = image.dataset.src;
    }


}

export default UseLazyLoad;
