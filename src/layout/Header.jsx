import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import '../App.css'; 
import TopBar from '../layout/TopBar'
import SearchInput from '../layout/SearchInput'
import { Link } from "react-router-dom";


const Header = ({setResult}) => {

    const HeaderDiv = styled.div`
        background-color: #FAEEE0;
        width: 100%;
        height: 15vh;
        display: flex;    
        align-items: center;
        justify-content: space-between;

    `;

    return ( 
    <Fragment>
        <TopBar />
        <HeaderDiv>
            <Link to={'/main'}>
                <p className='logo'>The Book Depository</p>
            </Link>
            <SearchInput
                setResult={setResult}
            />
        </HeaderDiv> 
    </Fragment>
    );
}
 
export default Header;