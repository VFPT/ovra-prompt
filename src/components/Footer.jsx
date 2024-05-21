import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2 className="footer-title">OvraAI</h2>
                    <p>
                        Dedicated to improving people's future, with AI technology. In an economical, accessible and simple way.
                    </p>
                </div>
                <div className="footer-section links">
                    <h2 className="footer-title">Quick Links</h2>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#Policy">Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 OvraAI. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;
