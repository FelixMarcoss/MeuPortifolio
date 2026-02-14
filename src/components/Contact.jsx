import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact">
            <div className="container contact-container">
                <h2 className="section-title">Entre em Contato</h2>
                <p className="contact-subtitle">
                    Vamos construir algo incrível juntos? Entre em contato através das minhas redes sociais ou telefone.
                </p>

                <div className="contact-links">
                    <a href="https://www.instagram.com/marcosffra" target="_blank" rel="noopener noreferrer" className="contact-card instagram">
                        <span className="icon">📸</span>
                        <span className="label">Instagram</span>
                        <span className="value">@marcosffra</span>
                    </a>

                    <a href="https://www.linkedin.com/in/marcos-ffra5226" target="_blank" rel="noopener noreferrer" className="contact-card linkedin">
                        <span className="icon">💼</span>
                        <span className="label">LinkedIn</span>
                        <span className="value">www.linkedin.com/in/marcos-ffra5226</span>
                    </a>

                    <a href="tel:5531972575464" className="contact-card phone">
                        <span className="icon">📱</span>
                        <span className="label">Telefone</span>
                        <span className="value">(31) 97257-5464</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
