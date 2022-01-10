import React from 'react'
import '../App.css'; 


const Footer = () => {
    return ( 
        <div className='footer-wrapper'>
            <div className='footer-sign-up'>
                <div className='newslatter-section'>

                    <div className='sign-up-text'>
                        <img alt="Sign up" src="https://d3ogvdx946i4sr.cloudfront.net/assets/v2.25.14/img/newsletter-icon.svg"/>
                        <p> Learn about new offers and get more <br/>
                            deals by joining our newsletter </p>
                    </div>

                    <div className='newslatter-form'>
                        <form className='form-group'>
                            <div>
                                <input type="email" className="form-control" placeholder="Email address" aria-label="Email address for newsletter subscription"/>
                            </div>
                            <div>
                                <button type="submit"> Sign up now</button>
                            </div>
                        </form>
                    </div>

                </div>
                <div className='footer-social-wrap'>
                    <h4>Follow us</h4>
                    <ul>
                        <li> 
                            <a rel="facebook" href="/">
                                <i className="icon-facebook"></i> 
                            </a>
                        </li>
                        <li>
                            <a rel="twitter" href="/">
                                <i className="icon-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a rel="pinterest" href="/">
                                <i className="icon-pinterest"></i>
                            </a>
                        </li>
                        <li>
                            <a rel='instagram' href='/'>
                                <i className="icon-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='footer-links'></div>
        </div> 
    );
}
 
export default Footer;