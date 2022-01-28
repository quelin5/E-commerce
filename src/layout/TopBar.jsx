import React, { useState } from 'react'
import styled from '@emotion/styled'
import {Link} from 'react-router-dom'
import '../App.css';

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

    const [setDisplayBookList] = useState(false)

    return ( 
        <div className='topbar-wrapper'>
            <div className='fav-button-wrapper'>
                <Link to='/favouriteBooks'>
                    <button onClick={() => setDisplayBookList(true)}> Favourites </button>
                </Link>
                    <button> My books </button>
            </div> 
            <div className='basket-signin-wrapper'>
                <Basket href='/'><span className="material-icons-outlined">shopping_basket</span></Basket>
                <SignInJoin href='/'><span className="material-icons-outlined">login</span> Sign In / Join</SignInJoin>
            </div>
        </div>
    );
}
 
export default TopBar;