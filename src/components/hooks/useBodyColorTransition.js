import {useEffect} from 'react';

function UseBodyColorTransition(myElementIsVisible) {


    useEffect(() => {
        const button = document.getElementById('button');

        if (myElementIsVisible) {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            document.body.style.transitionDuration = '1000ms';
            if (button != null) {
                button.style.borderColor = 'black';
                button.style.transitionDuration = '1000ms';
            }
        }else  {
            document.body.style.backgroundColor = "#313539";
            document.body.style.color = "white";
            if (button != null) {
                button.style.borderColor = 'white';
                button.style.transitionDuration = '1000ms';
            }
        }
    })
}

export default UseBodyColorTransition;
