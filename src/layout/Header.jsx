import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import LogoDiv from '../utils/LogoDiv.jsx'
import '../App.css'; 
import TopBar from '../layout/TopBar'


const Header = () => {

    const HeaderDiv = styled.div`
        background-color: #403042;
        width: 100%;
        height: 15vh;
        display: flex;
        flex-direction: row;
        align-items: center;
    `;

    return ( 
    <Fragment>
        <TopBar />
        <HeaderDiv>
            <div className='logo'>Logo</div>
            <div className='search-bar-div'>
                <input className='search-bar' type="text" placeholder=" Search for books by title / author / ISBN"/>
                <button class="lupe-button" type="submit"> Search </button>
            </div>
        </HeaderDiv> 
    </Fragment>
        
    );
}
 
export default Header;