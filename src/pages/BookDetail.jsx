import React, { Fragment, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import '../App.css'; 



const BookDetail = () => {

    /* USELOCATION: GETS 'BOOK' AND ITS INFO FROM BOOKCARD*/ 
    const location = useLocation();
    const { book } = location.state;

    const [rating, setRating] = useState(0);

    const handleRating = (rate) => {
        setRating(rate)
    }
    
    return ( 
        <div className='book-detail-wrapper'>
            <div className='book-detail-infoDisplay'>  
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
                <p className='book-title'>{book.volumeInfo.title}</p>
                <p> by {book.volumeInfo.authors}</p>

                <div class='description'>
                    <p> {book.volumeInfo.description}</p>
                </div>
                <div className='show-more'>
                    <a href='#'>Show more</a>
                </div>

                <button>{book.saleInfo.listPrice.amount} €</button>
            </div>
            <div className='book-detail-review'>
                Tell others what you think <br/>
                <input className='book-review-input' type='text' id='book-review' />
            </div>
            <div className='book-detail-rating'> 
                <p>Rate your book </p>
                <Rating onClick={handleRating} ratingValue={rating}/>
            </div>
        </div>
    );
}
 
export default BookDetail;