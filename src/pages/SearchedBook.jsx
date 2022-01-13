import React from 'react'
import axios from 'axios'

const SearchedBook = ({result, setResult}) => {

    
    return ( 
        <div className='api-results-wrapper'>
            {result.map(book => (
                <div className='book-wrapper'>
                    <a href={book.volumeInfo.previewLink}>
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
                        <p className='book-title'>{book.volumeInfo.title}</p>
                        <p> by {book.volumeInfo.authors}</p>
                    </a>
                </div>
            ))}
        </div>
    );
}
 
export default SearchedBook;