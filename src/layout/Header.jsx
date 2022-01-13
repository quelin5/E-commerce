import React, { Fragment, useState } from 'react'
import styled from '@emotion/styled'
import '../App.css'; 
import TopBar from '../layout/TopBar'
import SearchInput from '../layout/SearchInput'


const Header = ({setResult}) => {

    const HeaderDiv = styled.div`
        background-color: #FAEEE0;
        width: 100%;
        height: 15vh;
        display: flex;    
        align-items: center;
        justify-content: space-between;

    `;

    const Logo = styled.p`
        color: white;
        font-weight: bold;
        font-size: 3.5em;
        margin-left: 2rem;
    `;

    return ( 
    <Fragment>
        <TopBar />
        <HeaderDiv>
            <Logo>The Book Depository</Logo>
            <SearchInput
                setResult={setResult}
            />
        </HeaderDiv> 
    </Fragment>
    );
}
 
export default Header;