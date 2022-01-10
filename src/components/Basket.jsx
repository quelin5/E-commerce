import React, { Fragment } from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

const Basket = () => {
    return ( 
    <Fragment>
        <Header />
        <h1>from basket</h1> 
        <div className='basket-div-wrapper'>
            <div className='total-items-div'>
                <p> You have '1' item for a total of 'totalprice'</p>
            </div>
            <div className=''>
                <h4>Shopping basket details</h4>
                {/* HERE IS TO BE THE ITEM INFO */}
            </div>
        </div>
        <Footer />
    </Fragment>
    );
}
 
export default Basket;