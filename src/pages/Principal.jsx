import React, {Fragment, useState} from 'react'
import styled from '@emotion/styled'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import '../App.css'; 
import SearchedBook from './SearchedBook';

const FindNextBook = styled.button`
    color: #9E7777;
    background-color: #DBD0C0;
    padding: 2rem;
    border-radius: 10rem;
    align-items: center;
    cursor: pointer;
    border: none;

    :hover{
        filter: brightness(110%);
        color: whitesmoke;
    }
`;

const Principal = () => {

    const [result, setResult] = useState([]);


    return ( 
        <Fragment>
            <div className='div-content-wrap'>
                <Header
                    setResult={setResult}
                />
                <SearchedBook
                    result={result}
                    setResult={setResult}
                />

                {}
                <Footer />
            </div>
        </Fragment>
        
    );
}
 
export default Principal;