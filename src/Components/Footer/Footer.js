import React from 'react';
import './Footer.css';
import instagramLogo from '../../img/logo-instagram-png-2454.png';
import facebookLogo from '../../img/facebook-logo-png-38347.png';
import twitterLogo from '../../img/logo-twitter-png-5860.png';
import emailLogo from '../../img/gmail.png';

const Footer = () => {
    return (
        <div className="footer">
            <p className='text-center fs-3'>Get Me On</p>
            <div className='row row-footer'>
                <div className="col-sm-12 col-md-3 col-lg-3">
                    <p className='fs-4 text-center'><img className='ms-2' src={emailLogo} width="30px" alt="" /> shriiar@gmail.com
                    </p>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3">
                    <p className='fs-4 text-center'><img className='ms-2' src={instagramLogo} width="30px" alt="" /> shriiar</p>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3">
                    <p className='fs-4 text-center'><img className='ms-2' src={facebookLogo} width="30px" alt="" /> Sajid Shahriar</p>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3">
                    <p className='fs-4 text-center'><img className='ms-2' src={twitterLogo} width="30px" alt="" /> Shriiar</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;