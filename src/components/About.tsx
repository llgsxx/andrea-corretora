import React from 'react';
import { BROKER } from '../constants';
import './About.css';

const features = [
    { icon: '🏠', title: 'Imóveis Selecionados', desc: 'Curadoria dos melhores imóveis para o seu perfil e orçamento.' },
    { icon: '📋', title: 'Análise de Crédito Grátis', desc: 'Verificamos sua viabilidade de financiamento sem custo algum.' },
    { icon: '🤝', title: 'Parceria com Bancos', desc: 'Acesso às melhores taxas de Caixa, Bradesco, Itaú e mais.' },
    { icon: '✅', title: 'Despachante Incluso', desc: 'Cuidamos de toda a documentação e burocracia por você.' },
];

export const About: React.FC = () => (
    <section className="about" id="sobre">
        <div className="container about__inner">
            <div className="about__text">
                <div className="gold-line" />
                <h2 className="section-title">
                    Quem é <span>{BROKER.brokerName}?</span>
                </h2>
                <p className="section-subtitle">{BROKER.description}</p>
                <div className="about__badge">{BROKER.creci}</div>
            </div>

            <div className="about__features">
                {features.map((f, i) => (
                    <div className="about__feature-card" key={i}>
                        <div className="about__feature-icon">{f.icon}</div>
                        <div>
                            <h4 className="about__feature-title">{f.title}</h4>
                            <p className="about__feature-desc">{f.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
