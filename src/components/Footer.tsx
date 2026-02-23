import React from 'react';
import { BROKER } from '../constants';
import logoImg from '../assets/WhatsApp_Image_2026-02-22_at_21.28.31-removebg-preview.png';
import './Footer.css';

const WhatsAppIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.522 5.849L0 24l6.335-1.502A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.846 0-3.574-.495-5.063-1.36l-.363-.213-3.762.892.938-3.658-.234-.377A9.963 9.963 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
);

const InstagramIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
);

export const Footer: React.FC = () => {
    const waLink = `https://wa.me/${BROKER.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de mais informações.')}`;
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__cta-band">
                <div className="container footer__cta-inner">
                    <div>
                        <h3 className="footer__cta-title">Pronto para conquistar seu imóvel?</h3>
                        <p className="footer__cta-sub">Fale agora com a <strong>{BROKER.codename}</strong> e dê o primeiro passo.</p>
                    </div>
                    <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-wa footer__cta-btn">
                        <WhatsAppIcon /> Falar no WhatsApp
                    </a>
                </div>
            </div>
            <div className="footer__main">
                <div className="container footer__grid">
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <img src={logoImg} alt={BROKER.name} className="footer__logo-img" />
                            {BROKER.name}
                        </div>
                        <p className="footer__brand-desc">{BROKER.description}</p>
                        <span className="footer__creci">{BROKER.creci}</span>
                    </div>
                    <div className="footer__links">
                        <h4>Navegação</h4>
                        <ul>
                            <li><a href="#sobre">Sobre</a></li>
                            <li><a href="#servicos">Serviços</a></li>
                            <li><a href="#credito">Análise de Crédito</a></li>
                        </ul>
                    </div>
                    <div className="footer__contact">
                        <h4>Contato</h4>
                        <ul>
                            <li>📍 {BROKER.city}</li>
                            <li>📧 {BROKER.email}</li>
                            <li>
                                <a href={waLink} target="_blank" rel="noopener noreferrer">
                                    📱 WhatsApp
                                </a>
                            </li>
                            <li>
                                <a href={BROKER.instagram} target="_blank" rel="noopener noreferrer">
                                    <InstagramIcon /> Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container footer__bottom-inner">
                    <span>© {year} {BROKER.name}. Todos os direitos reservados.</span>
                    <span>Desenvolvido com ❤️ para você</span>
                </div>
            </div>
        </footer>
    );
};
