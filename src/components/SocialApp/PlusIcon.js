import React, {useState} from 'react';
import styled from 'styled-components';


const StyledPlus = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column;
  position: absolute;
  bottom: 2.5rem; 
  right: 2.5rem;
  z-index: 3;
  border: 1px solid white;
  border-radius: 50%;
  padding: 8px;
  transition-duration: 300ms;
  
  transform: ${({open}) => open ? 'rotate(-45deg)': 'rotate(0)'};
  
  div {
    width: 100%;
    height: 2px;
    border-radius: 2px;
    left: 10px;
    background-color: white !important;
    transition: all 0.4s linear;
  }
  
  div:nth-child(1) {
    transition-duration: 300ms;
    transform: translateY(4px);
  }
  
  div:nth-child(2){
    transition-duration: 300ms;
    transform:  rotate(90deg) translateX(-3px) !important;
  }
`;


const Popup = styled.div`
  position: absolute;
  width: 66%;
  background-color: #242629;
  color: white;
  z-index: 2;
  bottom: 1.5rem;
  right: 1.5rem;
  padding-bottom: 4rem !important;
  border-radius: 30px;
  transition-duration: 1000ms;
  opacity: ${({open}) => open ? '1': '0'}
;


`;


const Plus = () => {


    const [open, setOpen] = useState(false);
    const [countTab, setCountTab] = useState(1);


    return (
        <div>
            <StyledPlus open={open} onClick={() => setOpen (!open)}>
                <div id={'bar'} ></div>
                <div id={'bar'} ></div>
            </StyledPlus>


            <Popup open={open}>

                <ul className={'flex space-x-12 p-6 !pb-0 border-b-[1px] border-b-white/10'}>
                    <li onClick={() => setCountTab(1)} className={countTab === 1 ?'pb-6 border-b-[1px] border-b-white':'pb-6 border-b-0'}>Progresse</li>
                    <li onClick={() =>setCountTab(2)} className={countTab === 2 ?'pb-6 border-b-[1px] border-b-white':'pb-6 border-b-0'}>Inspire</li>
                    <li onClick={() =>setCountTab(3)} className={countTab === 3 ?'pb-6 border-b-[1px] border-b-white':'pb-6 border-b-0'}>Partage</li>
                </ul>

                {
                    countTab === 1 ?
                        <div className={'p-[1.5rem]'}>
                            <span>Progresse</span>
                            <p>Grâce aux nombreux entraînements et
                                conseils des professionnels du sport.</p>
                        </div>
                        : countTab === 2 ?
                                <div className={'p-[1.5rem]'}>
                                    <span>Inspire</span>
                                    <p>Grâce aux nombreux entraînements et
                                        conseils des professionnels du sport.</p>
                                </div>
                                :
                                    <div className={'p-[1.5rem]'}>
                                        <span>Progresse</span>
                                        <p>Grâce aux nombreux entraînements et
                                            conseils des professionnels du sport.</p>
                                    </div>
                }



            </Popup>




        </div>
    );
};






export default Plus;
