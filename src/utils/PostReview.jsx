import React, {useState} from 'react'

const PostReview = () => {

    const [review, setReview] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setReview({[e.target.name]: e.target.value})
    }
    
    const uploadReview = () => {
        //Subir al LocalStorage :)
    }

    return(
        <div className='book-detail-review'>
                Tell others what you think <br/>
                <input className='book-review-input' type='text' id='book-review' onChange={handleChange}/>
                <button onSubmit={uploadReview}>Post it</button>
        </div>
    )
}
 
export default PostReview;