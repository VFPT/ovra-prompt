import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2 className="footer-title">OvraAI</h2>
                    <p>
                        Herramienta gratuita para resumir artículos gratis con IA.
                    </p>
                </div>
                <div className="footer-section links">
                    <h2 className="footer-title">Explora</h2>
                    <ul>
                        <li><a href="mailto:hello@vicvenpet.xyz">Correo</a></li>
                        <li><a href="https://vicvenpet.xyz">Sobre mí</a></li>
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
