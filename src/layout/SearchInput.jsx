import React, { Fragment, useState} from 'react'
import axios from 'axios';

const SearchInput = ({setResult}) => {

    const [book, setBook] = useState('');
    const [apiKey, setApiKey] = useState('AIzaSyBgYWojBgarlimSZ0btpejO0RONPuxhqaw');
    

    function handleChange(e){
        let selectedBook = e.target.value;
        setBook(selectedBook);
    }

    function handleSubmit(e){
        e.preventDefault();

        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + book + '&key=' + apiKey + '&maxResults=5')
            .then(data => {
                setResult(data.data.items)
            })
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div className='search-bar-div'>
                    <input type="text" value={book} onChange={handleChange} placeholder=" Search for books by title / author / ISBN" autoFocus/>
                    <button className="search-button" type="submit"> Search </button>
                </div>
            </form>
        </Fragment>
    )
}
 
export default SearchInput;