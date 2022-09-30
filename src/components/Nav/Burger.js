import React, {useState} from 'react';
import styled from 'styled-components';


const StyledBurger = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  
  div {
    width: 2rem;
    height: 2px;
    border-radius: 2px;
    background-color: white;
    transition: all 0.4s linear;
    
    &:nth-child(1){
      transform: ${({open}) => open ? 'rotate(-45deg) ': 'rotate(0)'};
    }
    
    

    &:nth-child(2){
      transform: ${({open}) => open ? 'translateY(-12px) rotate(45deg)': 'rotate(0)'};
    }
    
  }
`;

const Burger = () => {


    const [open, setOpen] = useState(false);



    return (
        <div>
            <StyledBurger open={open} onClick={() => setOpen (!open)}>
                <div className={document.body.style.backgroundColor==='white' ? '!bg-black':'!bg-white'} ></div>
                <div className={document.body.style.backgroundColor==='white' ? '!bg-black':'!bg-white'} ></div>

            </StyledBurger>

        </div>
    );
};

export default Burger;
