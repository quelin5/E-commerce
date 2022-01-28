import React from 'react'
import { Link } from "react-router-dom";

import '../App.css'; 


const BookCard = ({book}) => {

    return (
        <Link 
            to={`/bookdetail/:book${book.volumeInfo.title}`}
            state={{
                book
            }}
        >
            <div className='book-wrapper'>  
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
                <p className='book-title'>{book.volumeInfo.title}</p>
                <p> by {book.volumeInfo.authors}</p>
            </div>
        </Link>
        
    );
}
 
export default BookCard;