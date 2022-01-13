import React from 'react'
import styled from '@emotion/styled'
import '../App.css'; 



const DivContainer = styled.div`
    background-color: #DBD0C0;
    width: 100%;
    height: 7vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

const Basket = styled.a`
    color: white;
    padding: 8px;
`;

const SignInJoin = styled.a`
    margin: 2vw;
    margin-left: 0;
    border-left: 1px solid white;
    color: white;
    display: flex;
    align-items: center;
`;

const TopBar = () => {
    return ( 
       
        <DivContainer>
            <Basket href='/'><span className="material-icons-outlined">shopping_basket</span></Basket>
            <SignInJoin href='/'><span className="material-icons-outlined">login</span> Sign In / Join</SignInJoin>
        </DivContainer>
    );
}
 
export default TopBar;