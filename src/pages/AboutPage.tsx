import { useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Dumbbell } from 'lucide-react';
import { resolveAppLinks } from '../lib/app-links';
import '../landing.css';
import '../contact.css';

const { appUrl } = resolveAppLinks(import.meta.env.VITE_APP_URL
  || (import.meta.env.DEV ? 'http://127.0.0.1:3107/' : undefined), import.meta.env.DEV);

export default function AboutPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Sobre nós | FitFlow Caraguá';
    return () => { document.title = previousTitle; };
  }, []);
  return <div className="fitflow-landing lp-contact-page">
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="lp-header"><div className="lp-container lp-header-inner">
      <a className="lp-brand" href="/" aria-label="FitFlow Caraguá, início"><Dumbbell size={27} aria-hidden="true"/><span>FITFLOW<small>CARAGUÁ</small></span></a>
      <nav className="lp-contact-nav" aria-label="Navegação principal"><a href="/">Início</a><a href="/sobre" aria-current="page">Sobre nós</a><a href="/contato">Contato</a></nav>
      <div className="lp-header-actions"><a href={appUrl} className="lp-button lp-button-small">Login <ArrowUpRight size={16} aria-hidden="true"/></a></div>
    </div></header>
    <main id="conteudo" className="lp-container lp-contact-main" tabIndex={-1}>
      <section className="lp-contact-intro" aria-labelledby="about-title"><p className="lp-eyebrow">FITFLOW CARAGUÁ / SOBRE NÓS</p><h1 id="about-title">Organização para<br/>continuar evoluindo.</h1><p>O FitFlow é um projeto acadêmico de Enzo Marcelo Ribeiro Fermiano, desenvolvido em Caraguatatuba para estudar uma necessidade das academias de bairro: organizar fichas de treino e mensalidades que ainda ficam espalhadas entre papel, cadernos e planilhas.</p><p className="lp-contact-note">A proposta conecta a rotina do gestor, a prescrição do instrutor e o acompanhamento do aluno. É uma aplicação web responsiva, com atenção ao uso do celular durante o treino.</p><a className="lp-text-link" href="/contato">Conversar sobre o projeto <ArrowRight size={16} aria-hidden="true"/></a></section>
      <section className="lp-contact-panel" aria-label="Propósito do projeto"><h2>Por que o FitFlow existe</h2><h3 className="lp-about-heading">Missão</h3><p>Ajudar gestores locais a organizar informações e oferecer aos alunos continuidade no acompanhamento dos treinos pelo celular.</p><h3 className="lp-about-heading">Visão</h3><p>Desenvolver e validar uma solução acessível para a rotina das academias de bairro de Caraguatatuba, aprendendo com os fluxos reais de gestão e treinamento.</p><h3 className="lp-about-heading">Valores</h3><p>Clareza na informação, facilidade de uso, preservação do histórico e transparência sobre o que o sistema faz e sobre seus limites.</p><h3 className="lp-about-heading">Projeto em desenvolvimento</h3><p>A demonstração usa dados fictícios. Estimativas de nutrição e conteúdo de IA têm finalidade educativa; o instrutor continua responsável pela revisão da ficha de treino.</p></section>
    </main>
    <footer className="lp-footer lp-container"><a className="lp-brand" href="/"><Dumbbell size={23} aria-hidden="true"/><span>FITFLOW<small>CARAGUÁ</small></span></a><div><strong>Enzo Marcelo Ribeiro Fermiano</strong><p>Análise e Desenvolvimento de Sistemas · 2026</p></div><a className="lp-text-link" href="/contato">Contato</a></footer>
  </div>;
}
