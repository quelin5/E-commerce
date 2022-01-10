import React, {Fragment} from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import '../pages/AuthPage.css'

const AuthPage = () => {
    return ( 
        <Fragment>
            <Header />
            <div className='auth-content-wrap'>
                <div className='main-content'>
                    <div className='block-wrap-half'>
                        <h4> Sign In </h4>
                        <div>
                            <input type='email' placeholder='Email' id='email'/>
                        </div>
                        <div>
                            <input type='password' placeholder='Password' id='password'/>
                        </div>
                        <div>
                            <button className='sign-in-button'>Sign-in</button>
                        </div>
                    </div>
                    <div className='block-wrap-half'>
                        <h4> Join </h4>
                        <div>
                            <input type='text' placeholder='Name' id='name'/>
                        </div>
                        <div>
                            <input type='email' placeholder='Email' id='email'/>
                        </div>
                        <div>
                            <input type='password' placeholder='Password' id='password'/>
                        </div>
                        <div>
                            <button className='create-account-button'>Create your account</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment> 
    );
}
 
export default AuthPage;