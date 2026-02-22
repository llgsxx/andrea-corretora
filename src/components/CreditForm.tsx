import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { BROKER } from '../constants';
import './CreditForm.css';

interface FormData {
    nome: string;
    cpf: string;
    telefone: string;
    email: string;
    renda: string;
    valorImovel: string;
    tipoImovel: string;
    temFGTS: string;
}

// ── Masks ─────────────────────────────────────────────────────────────────────
const maskCPF = (v: string) =>
    v.replace(/\D/g, '').slice(0, 11)
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');

const maskPhone = (v: string) => {
    const d = v.replace(/\D/g, '').slice(0, 11);
    if (d.length <= 10) return d.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    return d.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
};

const maskMoney = (v: string) => {
    const num = v.replace(/\D/g, '');
    if (!num) return '';
    const cents = parseInt(num, 10) / 100;
    return cents.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

// ── WhatsApp message builder ──────────────────────────────────────────────────
const buildWAMessage = (data: FormData) => {
    const lines = [
        '🏠 *SOLICITAÇÃO DE ANÁLISE DE CRÉDITO*',
        '',
        `👤 *Nome:* ${data.nome}`,
        `📋 *CPF:* ${data.cpf}`,
        `📱 *Telefone:* ${data.telefone}`,
        `📧 *E-mail:* ${data.email}`,
        `💵 *Renda Mensal:* ${data.renda}`,
        `🏡 *Valor do Imóvel:* ${data.valorImovel}`,
        `🏗️ *Tipo de Imóvel:* ${data.tipoImovel}`,
        `💰 *Possui FGTS?* ${data.temFGTS}`,
        '',
        '_Mensagem enviada pelo site._',
    ];
    return lines.join('\n');
};

const SendIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.522 5.849L0 24l6.335-1.502A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.846 0-3.574-.495-5.063-1.36l-.363-.213-3.762.892.938-3.658-.234-.377A9.963 9.963 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
);

const INITIAL: FormData = {
    nome: '', cpf: '', telefone: '', email: '',
    renda: '', valorImovel: '', tipoImovel: '', temFGTS: '',
};

export const CreditForm: React.FC = () => {
    const [form, setForm] = useState<FormData>(INITIAL);
    const [submitted, setSubmitted] = useState(false);

    const handle = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(prev => {
            if (name === 'cpf') return { ...prev, cpf: maskCPF(value) };
            if (name === 'telefone') return { ...prev, telefone: maskPhone(value) };
            if (name === 'renda') return { ...prev, renda: maskMoney(value) };
            if (name === 'valorImovel') return { ...prev, valorImovel: maskMoney(value) };
            return { ...prev, [name]: value };
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const msg = buildWAMessage(form);
        const url = `https://wa.me/${BROKER.whatsappNumber}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <section className="credit" id="credito">
                <div className="container credit__inner">
                    <div className="credit__success">
                        <div className="credit__success-icon">✅</div>
                        <h3>Dados enviados com sucesso!</h3>
                        <p>Você será redirecionado para o WhatsApp. Em breve entraremos em contato.</p>
                        <button className="btn-gold" onClick={() => setSubmitted(false)}>
                            Nova solicitação
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="credit" id="credito">
            <div className="container credit__inner">
                <div className="credit__header">
                    <div className="gold-line" />
                    <h2 className="section-title">
                        Análise de <span>Crédito Grátis</span>
                    </h2>
                    <p className="section-subtitle">
                        Preencha o formulário abaixo e receba uma análise rápida da sua capacidade de
                        financiamento. Seus dados são enviados diretamente para nossa equipe via WhatsApp.
                    </p>
                </div>

                <div className="credit__card">
                    <div className="credit__card-badge">
                        <span className="hero__badge-dot" style={{ background: '#25D366', animation: 'pulse 2s infinite' }} />
                        Resposta em até 24 horas
                    </div>

                    <form className="credit__form" onSubmit={handleSubmit} noValidate>
                        {/* Row 1 */}
                        <div className="credit__row">
                            <div className="credit__field">
                                <label htmlFor="nome">Nome completo *</label>
                                <input id="nome" name="nome" type="text" placeholder="João da Silva" required value={form.nome} onChange={handle} />
                            </div>
                            <div className="credit__field">
                                <label htmlFor="cpf">CPF *</label>
                                <input id="cpf" name="cpf" type="text" inputMode="numeric" placeholder="000.000.000-00" required value={form.cpf} onChange={handle} />
                            </div>
                        </div>
                        {/* Row 2 */}
                        <div className="credit__row">
                            <div className="credit__field">
                                <label htmlFor="telefone">WhatsApp / Telefone *</label>
                                <input id="telefone" name="telefone" type="tel" inputMode="numeric" placeholder="(11) 99999-9999" required value={form.telefone} onChange={handle} />
                            </div>
                            <div className="credit__field">
                                <label htmlFor="email">E-mail</label>
                                <input id="email" name="email" type="email" placeholder="joao@email.com" value={form.email} onChange={handle} />
                            </div>
                        </div>
                        {/* Row 3 */}
                        <div className="credit__row">
                            <div className="credit__field">
                                <label htmlFor="renda">Renda mensal bruta *</label>
                                <input id="renda" name="renda" type="text" inputMode="numeric" placeholder="R$ 5.000,00" required value={form.renda} onChange={handle} />
                            </div>
                            <div className="credit__field">
                                <label htmlFor="valorImovel">Valor do imóvel desejado *</label>
                                <input id="valorImovel" name="valorImovel" type="text" inputMode="numeric" placeholder="R$ 300.000,00" required value={form.valorImovel} onChange={handle} />
                            </div>
                        </div>
                        {/* Row 4 */}
                        <div className="credit__row">
                            <div className="credit__field">
                                <label htmlFor="tipoImovel">Tipo de imóvel *</label>
                                <select id="tipoImovel" name="tipoImovel" required value={form.tipoImovel} onChange={handle}>
                                    <option value="">Selecione...</option>
                                    <option value="Apartamento">Apartamento</option>
                                    <option value="Casa">Casa</option>
                                    <option value="Terreno">Terreno</option>
                                    <option value="Comercial">Imóvel Comercial</option>
                                    <option value="Na Planta">Na Planta / Lançamento</option>
                                </select>
                            </div>
                            <div className="credit__field">
                                <label htmlFor="temFGTS">Possui FGTS para uso? *</label>
                                <select id="temFGTS" name="temFGTS" required value={form.temFGTS} onChange={handle}>
                                    <option value="">Selecione...</option>
                                    <option value="Sim, desejo utilizar">Sim, desejo utilizar</option>
                                    <option value="Sim, mas não quero usar agora">Sim, mas não quero usar agora</option>
                                    <option value="Não possuo FGTS">Não possuo FGTS</option>
                                </select>
                            </div>
                        </div>

                        <p className="credit__privacy">
                            🔒 Seus dados são usados apenas para análise de crédito e enviados de forma segura.
                        </p>

                        <button type="submit" className="btn-wa credit__submit">
                            <SendIcon />
                            Enviar para análise via WhatsApp
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
