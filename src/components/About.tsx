import React from 'react';
import { BROKER } from '../constants';
import brokerImg from '../assets/Gemini_Generated_Image_gmaflkgmaflkgmaf.png';
import './About.css';

export const About: React.FC = () => (
    <section className="about" id="sobre">
        <div className="container about__inner">
            <div className="about__image-container">
                <img src={brokerImg} alt={BROKER.brokerName} className="about__image" />
            </div>
            <div className="about__text">
                <div className="gold-line" />
                <h2 className="section-title">
                    Quem é <span>{BROKER.brokerName}?</span>
                </h2>
                <div className="about__codename">{BROKER.codename}</div>
                <p className="section-subtitle">{BROKER.description}</p>
                <div className="about__badge">{BROKER.creci}</div>
            </div>
        </div>
    </section>
);
