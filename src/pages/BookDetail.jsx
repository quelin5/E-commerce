import React, { Fragment} from 'react'
import { useLocation } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import '../App.css'; 
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import PostReview from '../utils/PostReview';

const BookDetail = () => {

    /* USELOCATION: GETS 'BOOK' AND ITS INFO FROM BOOKCARD*/ 
    const location = useLocation();
    const { book } = location.state;

    const bookInfo = {
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors,
        rate: 0
    }
    console.log(book.volumeInfo)

    const rating = 0;

    const handleRating = (rate) => {
        bookInfo.rate = rate;
        const bookRate = rate;

        let books = JSON.parse(localStorage.getItem("BookRating"));
        books.push(bookInfo);
        localStorage.setItem("BookRating", JSON.stringify(books));

        if (rate === 100) {
            let favBooks = JSON.parse(localStorage.getItem('FavouriteBooks'));
            favBooks.push(bookInfo);
            localStorage.setItem('FavouriteBooks', JSON.stringify(favBooks));
        }
        
    }

    return ( 
        <Fragment>
            <Header />
            <div className='book-detail-wrapper'>
                <div className='book-detail-infoDisplay'>  
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
                    <p className='book-title'>{book.volumeInfo.title}</p>
                    <p> by {book.volumeInfo.authors}</p>

                    <div className='description'>
                        <p> {book.volumeInfo.description}</p>
                    </div>
                    <div className='show-more'>
                        <a href='#'>Show more</a>
                    </div>

                    <button>{book.saleInfo.listPrice.amount} €</button>

                    <div className='read-option'>
                        Read <input type='checkbox'/> 
                    </div>
                </div>

                <PostReview />

                <div className='book-detail-rating'> 
                    <p>Rate your book </p>
                    <Rating onClick={handleRating} ratingValue={rating}/>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}
 
export default BookDetail;