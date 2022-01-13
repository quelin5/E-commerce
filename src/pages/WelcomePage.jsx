import React from 'react'
import '../App.css'; 
import styled from '@emotion/styled'
import {Link} from 'react-router-dom'
import Principal from './Principal';

const WelcomePage = () => {

    const gotoMain = () => {
        return <Link to={'/main'}></Link>
    }

    const FindNextBook = styled.button`
        color: #9E7777;
        background-color: #DBD0C0;
        padding: 2rem;
        border-radius: 10rem;
        cursor: pointer;
        border: none;
        height: 20vh;
        width: 25vw;

        :hover{
            filter: brightness(110%);
            color: whitesmoke;
        }
    `;

    return ( 
        <div className='principal-wrapper'>
            <Link to={'/main'}>
                <FindNextBook onClick={gotoMain}>Find your next book → </FindNextBook>
            </Link>
        </div>
    );
}
 
export default WelcomePage;