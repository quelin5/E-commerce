import React from 'react'
import BookCard from '../pages/BookCard'

const SearchedBook = ({result}) => {

    return ( 
        
            <div className='api-results-wrapper'>
                {result.map(book => (
                    <BookCard key={book.volumeInfo.previewLink} book={book} />
                ))}
            </div>
        
    );
}
 
export default SearchedBook;