import React from 'react';
import './Services.css';

const services = [
    {
        icon: '🏡',
        title: 'Compra de Imóveis',
        desc: 'Encontramos o imóvel ideal para o seu perfil: casa, apartamento, terreno ou comercial.',
        highlight: false,
    },
    {
        icon: '💰',
        title: 'Financiamento Imobiliário',
        desc: 'Simulamos o melhor financiamento nos principais bancos e conseguimos as menores taxas do mercado.',
        highlight: true,
    },
    {
        icon: '📊',
        title: 'Análise de Crédito',
        desc: 'Avaliação gratuita da sua capacidade de crédito com retorno rápido e sem burocracia.',
        highlight: false,
    },
    {
        icon: '📄',
        title: 'Consultoria Jurídica',
        desc: 'Assessoria completa na documentação, contratos e registro do imóvel.',
        highlight: false,
    },
    {
        icon: '🏗️',
        title: 'Imóveis na Planta',
        desc: 'Acesso exclusivo a lançamentos e imóveis na planta com condições especiais de pagamento.',
        highlight: false,
    },
    {
        icon: '🔑',
        title: 'FGTS no Financiamento',
        desc: 'Orientamos como usar seu FGTS para entrada, amortização ou liquidação do saldo devedor.',
        highlight: false,
    },
];

export const Services: React.FC = () => (
    <section className="services" id="servicos">
        <div className="container">
            <div className="services__header">
                <div className="gold-line" />
                <h2 className="section-title">
                    Nossos <span>Serviços</span>
                </h2>
                <p className="section-subtitle">
                    Tudo que você precisa para conquistar o seu imóvel em um único lugar.
                </p>
            </div>

            <div className="services__grid">
                {services.map((s, i) => (
                    <div className={`services__card ${s.highlight ? 'services__card--highlight' : ''}`} key={i}>
                        <div className="services__card-icon">{s.icon}</div>
                        <h3 className="services__card-title">{s.title}</h3>
                        <p className="services__card-desc">{s.desc}</p>
                        {s.highlight && <div className="services__card-badge">Mais popular</div>}
                    </div>
                ))}
            </div>
        </div>
    </section>
);
