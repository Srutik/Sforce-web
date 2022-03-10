import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import ContactMailIcon from '@mui/icons-material/ContactMail';

export default function Footer() {
    return (
        <div className="Footer-container">
            <div className="Footer-grid">
                <div className="grid-1">
                    <div className="footer-logo">
                        <span className="logo1">S</span><span className="logo2">FORCE</span>
                    </div>
                    <div className="footer-tag">
                        <span> Happy Hiring !!! </span>
                    </div>
                    <div className="contact-info">
                        <span><PhoneIcon /></span>
                        <span className="contact-number">97123-05674</span>
                    </div>
                    <div className="contact-info">
                        <span><ContactMailIcon /></span>
                        <a className="mail-link" href="mailto:info@sforceservices.com">info@sforceservices.com</a>
                    </div>
                </div>



                <div className="grid-1">
                    <div className="jobs-title">
                        <h1>Best jobs by</h1>
                    </div>
                    <div className="jobs-lists">

                    </div>
                </div>


                <div className="grid-1">
                    <div className="jobs-title">
                        <h1>Important Links</h1>
                    </div>
                    <div className="jobs-lists">
                        <ul className="links-details">
                            <li className="job-item">
                                <Link to="/" className="job-link">
                                    Home
                                </Link>
                            </li>
                            <li className="job-item">
                                <Link to="/" className="job-link">
                                    Posts
                                </Link>
                            </li>
                            <li className="job-item">
                                <Link to="/" className="job-link">
                                    Services
                                </Link>
                            </li>
                            <li className="job-item">
                                <Link to="/" className="job-link">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
