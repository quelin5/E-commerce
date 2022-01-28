import React, {useEffect} from 'react'
import '../App.css'; 
import styled from '@emotion/styled'
import {Link} from 'react-router-dom'

const WelcomePage = () => {

    /* Initialize LocalStorage */
    useEffect(() => {
        localStorage.setItem('BookRating', '[]'),
        localStorage.setItem('FavouriteBooks', '[]')
    }, [])

    const FindNextBook = styled.button`
        color: #DBD0C0;
        background-color: #9E7777;
        padding: 2rem;
        border-radius: 10rem;
        cursor: pointer;
        border: none;
        height: 12vh;
        width: 20vw;

        :hover{
            filter: brightness(110%);
            color: whitesmoke;
        }
    `;

    return ( 
        <div className='principal-wrapper'>
            <h1 className='welcome-h'>Welcome!</h1>
            <h3 className='mainPage-h'> The Book Depository <br/> is a page for keeping your readings up-to-date.</h3>
            <Link to={'/main'}>
                <FindNextBook> Find your next book → </FindNextBook>
            </Link>
        </div>
    );
}
 
export default WelcomePage;