import {useEffect} from 'react';

function UseBodyColorTransition(myHeaderIsVisible) {


    useEffect(() => {
        const button = document.getElementById('button');
        const bodyStyle = document.body.style;
        const bars = document.querySelectorAll('#bar');
        const box = document.querySelectorAll('#box');


        if (myHeaderIsVisible === false ) {
            bodyStyle.backgroundColor = "white";
            bodyStyle.color = "black";
            bodyStyle.transitionDuration = '1000ms';
            for (let i = 0; i < bars.length; i++) {
                bars[i].style.backgroundColor = 'black';
            }
            for (let i = 0; i < box.length; i++) {
                box[i].style.backgroundColor = "#E9E9E9";
            }

            if (button != null) {
                button.style.borderColor = 'black';
                button.style.transitionDuration = '1000ms';
            }

        } else  {
            bodyStyle.backgroundColor = "#313539";
            bodyStyle.color = "white";
            for (let i = 0; i < box.length; i++) {
                box[i].style.backgroundColor = "#242629";
            }
            if (button != null) {
                button.style.borderColor = 'white';
                button.style.transitionDuration = '1000ms';
            }
        }
    })
}

export default UseBodyColorTransition;
