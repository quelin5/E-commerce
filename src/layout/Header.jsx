import React, { Fragment, useState } from 'react'
import styled from '@emotion/styled'
import '../App.css'; 
import TopBar from '../layout/TopBar'


const Header = () => {

    /* THE CODE ABOVE WILL BE PLACED IN THE SEARCHEDBOOK COMPONENT */

    const [book, setBook] = useState('');
    const [result, setResult] = useState([]);
    const [apiKey, setApiKey] = useState('AIzaSyBgYWojBgarlimSZ0btpejO0RONPuxhqaw');

    

    function handleChange(e){
        let texto = e.target.value;
        setBook(texto);
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(book);
    }

    /* END OF CODE */ 

    const HeaderDiv = styled.div`
        background-color: #403042;
        width: 100%;
        height: 15vh;
        display: flex;     
    `;

    return ( 
    <Fragment>
        <TopBar />
        <HeaderDiv>
            <div className='logo'>Logo</div>
            <form onSubmit={handleSubmit}>
                <div className='search-bar-div'>
                    <input type="text" value={book} onKeyUp={handleChange} placeholder=" Search for books by title / author / ISBN"/>
                    <button className="search-button" type="submit"> Search </button>
                </div>
            </form>
        </HeaderDiv> 
    </Fragment>
    );
}
 
export default Header;