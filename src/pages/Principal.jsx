import React, {Fragment} from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import '../App.css'; 

const Principal = () => {
    return ( 
        <Fragment>
            <div className='div-content-wrap'>
                <Header />
                <div className='principal-wrapper'>
                    <h1>from Principal</h1>
                </div>
                <Footer />
            </div>
           
            
        </Fragment>
        
    );
}
 
export default Principal;