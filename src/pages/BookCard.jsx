import React, {Fragment} from 'react'
import '../App.css'; 


const BookCard = () => {
    return (
        <Fragment>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
            <p className='book-title'>{book.volumeInfo.title}</p>
            <p> by {book.volumeInfo.authors}</p>
        </Fragment>
    );
}
 
export default BookCard;