import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import BookCard from '../pages/BookCard'

const SearchedBook = ({result, setResult}) => {

    const [showContent, setShowContent] = useState(false);

    return ( 
        <div className='api-results-wrapper'>
            {result.map(book => (
                <BookCard key={book.volumeInfo.previewLink} book={book} />
            ))}
        </div>
    );
}
 
export default SearchedBook;