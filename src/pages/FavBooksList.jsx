import React, {Fragment} from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import '../App.css'; 


const FavBooksList = () => {

    const str_favBooksList = localStorage.getItem('FavouriteBooks');
    const favBooksList = JSON.parse(str_favBooksList);
  
    return(
        <Fragment>
            <Header />
            <h1 className='favBooks-title'>My favourite books </h1>
                {favBooksList.length === 0 
                ? 
                    <div className='empty-favBooksList-div'>
                        <h3>Your favourite books list is still empty. Go find a new reading!</h3>
                        <img className='reader-woman-pic' src='src/images/reader-woman.jpeg' alt='reader-woman'/>
                    </div> 
                : null}
            <Footer />
        </Fragment>
        
    )
}
 
export default FavBooksList;