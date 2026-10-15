import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, Dumbbell, Menu, X, Users, ClipboardList, CalendarCheck, CreditCard, Activity, BookOpen, Check, ChevronDown } from 'lucide-react';
import '../landing.css';
import { resolveAppLinks } from '../lib/app-links';

// Preview local aponta ao aplicativo real local; publicação usa a origem configurada.
const { appUrl, laboratoryUrl } = resolveAppLinks(import.meta.env.VITE_APP_URL
  || (import.meta.env.DEV ? 'http://127.0.0.1:3107/' : undefined), import.meta.env.DEV);
const features = [
  { icon: Users, number: '01', name: 'Alunos e planos', text: 'Cadastro, vínculo com plano e situação da matrícula em um só lugar.' },
  { icon: ClipboardList, number: '02', name: 'Fichas de treino', text: 'Exercícios, séries, repetições e orientações organizados por aluno.' },
  { icon: Activity, number: '03', name: 'Histórico de cargas', text: 'Registros de execução para acompanhar o que foi realizado.' },
  { icon: CalendarCheck, number: '04', name: 'Presença', text: 'Check-in diário e histórico de frequência preservado.' },
  { icon: CreditCard, number: '05', name: 'Controle financeiro', text: 'Registro de mensalidades e visão dos pagamentos da academia.' },
  { icon: BookOpen, number: '06', name: 'Nutrição e fundamentos', text: 'Estimativas explicáveis e referências científicas para consulta.' },
];
const journeys = [
  { id: 'gestor', label: 'Para a gestão', title: 'Menos informação espalhada. Mais clareza na rotina.', text: 'Alunos, planos, presença e mensalidades conectados. Uma visão para organizar o atendimento e acompanhar a academia.', steps: ['Cadastre o aluno e vincule um plano', 'Consulte presença e situação da matrícula', 'Registre pagamentos e acompanhe relatórios'], icon: Users },
  { id: 'aluno', label: 'Para o aluno', title: 'O treino e a evolução acompanham você.', text: 'Consulte a ficha, registre a execução e acompanhe seu histórico. As estimativas de nutrição mostram as contas e as hipóteses utilizadas.', steps: ['Consulte sua ficha de treino', 'Registre carga e repetições realizadas', 'Compare seu histórico e consulte fundamentos'], icon: Dumbbell },
];

/** Apresentação acadêmica com navegação real e estados honestos de implementação. */
export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedJourney, setSelectedJourney] = useState('gestor');
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!menuOpen) return;
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || !window.matchMedia('(max-width: 768px)').matches) return;
      event.preventDefault();
      setMenuOpen(false);
      menuButtonRef.current?.focus({ preventScroll: true });
    };
    const closeOutsideHeader = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setMenuOpen(false);
    };
    document.addEventListener('keydown', closeWithEscape);
    document.addEventListener('pointerdown', closeOutsideHeader);
    return () => {
      document.removeEventListener('keydown', closeWithEscape);
      document.removeEventListener('pointerdown', closeOutsideHeader);
    };
  }, [menuOpen]);
  const journey = journeys.find(item => item.id === selectedJourney)!;
  return (
    <div className="fitflow-landing">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="lp-header" ref={headerRef}>
        <div className="lp-container lp-header-inner">
          <a className="lp-brand" href="#inicio" aria-label="FitFlow Caraguá, início"><Dumbbell size={27} strokeWidth={1.7} aria-hidden="true"/><span>FITFLOW<small>CARAGUÁ</small></span></a>
          <nav className={menuOpen ? 'lp-navigation is-open' : 'lp-navigation'} id="lp-mobile-navigation" aria-label="Navegação principal">
            <a href="#produto" onClick={() => setMenuOpen(false)}>O produto</a><a href="#rotina" onClick={() => setMenuOpen(false)}>Como funciona</a><a href="#fundamentos" onClick={() => setMenuOpen(false)}>Fundamentos</a><a href="#projeto" onClick={() => setMenuOpen(false)}>O projeto</a>
            <a href={appUrl} className="lp-mobile-access" onClick={() => setMenuOpen(false)}>Acessar FitFlow <ArrowUpRight size={17} aria-hidden="true"/></a>
          </nav>
          <div className="lp-header-actions"><a href={appUrl} className="lp-button lp-button-small">Acessar FitFlow <ArrowUpRight size={16} aria-hidden="true"/></a><button ref={menuButtonRef} className="lp-menu-button" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button></div>
        </div>
      </header>
      <main id="conteudo" tabIndex={-1}>
        <section id="inicio" className="lp-container lp-hero">
          <div className="lp-hero-copy"><p className="lp-eyebrow"><span/> GESTÃO DE ACADEMIAS & EVOLUÇÃO DO ALUNO</p><h1>Uma rotina<br/>mais forte.<br/><em>Em todos os sentidos.</em></h1><p className="lp-hero-description">Da organização da academia ao acompanhamento do treino. O FitFlow conecta gestão, fichas e histórico em uma experiência feita para o dia a dia.</p><div className="lp-hero-actions"><a href={appUrl} className="lp-button">Acessar o sistema <ArrowRight size={18} aria-hidden="true"/></a><a href="#rotina" className="lp-text-link">Conhecer os fluxos <ArrowDownIcon/></a></div><p className="lp-hero-note">Projeto acadêmico · Caraguatatuba, SP · 2026</p></div>
          <figure className="lp-hero-image"><img src="/fitflow-hero-v2.png" alt="Ilustração de uma academia contemporânea com rack de musculação e iluminação natural" width="1254" height="1254" fetchPriority="high"/><figcaption><span>FITFLOW CARAGUÁ</span><strong>Organização para a academia.<br/>Continuidade para o aluno.</strong><small>Imagem ilustrativa gerada por IA</small></figcaption></figure>
        </section>
        <div className="lp-product-strip"><div className="lp-container"><span>Uma plataforma, duas perspectivas.</span><span>Gestão da academia <ArrowRight size={14}/></span><span>Acompanhamento do aluno <ArrowRight size={14}/></span><a href="#fundamentos">Métodos transparentes <ArrowUpRight size={14}/></a></div></div>
        <section id="produto" className="lp-container lp-section">
          <div className="lp-section-heading"><p className="lp-eyebrow">01 / O PRODUTO</p><h2>O essencial da rotina.<br/><span>No mesmo lugar.</span></h2><p>Informações que antes ficavam em fichas, planilhas e registros separados passam a fazer parte do mesmo acompanhamento.</p></div>
          <div className="lp-feature-grid">{features.map(({icon:Icon,...feature}) => <article className="lp-feature" key={feature.number}><div className="lp-feature-top"><span>{feature.number}</span><Icon size={23} strokeWidth={1.5} aria-hidden="true"/></div><h3>{feature.name}</h3><p>{feature.text}</p></article>)}</div>
        </section>
        <section id="rotina" className="lp-journey-section"><div className="lp-container lp-section">
          <div className="lp-section-heading"><p className="lp-eyebrow">02 / COMO FUNCIONA</p><h2>Dois lados da academia.<br/><span>Uma rotina conectada.</span></h2></div>
          {/* Botões alternam conteúdo, sem fingir navegação ou registros persistidos. */}
          <div className="lp-journey-tabs" role="group" aria-label="Escolher jornada">{journeys.map(item => <button key={item.id} type="button" aria-pressed={selectedJourney === item.id} onClick={() => setSelectedJourney(item.id)}>{item.label}<ArrowUpRight size={17} aria-hidden="true"/></button>)}</div>
          <div className="lp-journey-content" aria-live="polite"><div><journey.icon size={34} strokeWidth={1.4} className="lp-journey-icon" aria-hidden="true"/><h3>{journey.title}</h3><p>{journey.text}</p><a className="lp-text-link" href={appUrl}>Conhecer o sistema <ArrowRight size={16}/></a></div><ol className="lp-steps">{journey.steps.map((step,i)=><li key={step}><span>0{i+1}</span><p>{step}</p><Check size={17} aria-hidden="true"/></li>)}</ol></div>
          <div className="lp-product-proof">
            <div className="lp-proof-heading"><div><p className="lp-eyebrow">DENTRO DO FITFLOW / GESTÃO</p><h3>A rotina ganha uma visão.</h3></div><p>O painel reúne alunos, matrículas, frequência e recebimentos registrados. Esta é uma captura do aplicativo publicado, com dados demonstrativos.</p></div>
            <figure className="lp-proof-image"><img src="/dashboard-demonstracao.jpg" alt="Captura real do painel de gestão FitFlow, com acesso a alunos e fichas, indicadores de matrícula e frequência, usando dados demonstrativos" width="1298" height="880" loading="lazy"/><figcaption><span>Captura do aplicativo · 12 de outubro de 2026 · Dados demonstrativos, sem resultados comerciais.</span><a href="/dashboard-demonstracao.jpg" target="_blank" rel="noopener noreferrer">Abrir captura completa <ArrowUpRight size={15} aria-hidden="true"/></a></figcaption></figure>
          </div>
        </div></section>
        <section id="fundamentos" className="lp-science-section"><div className="lp-container lp-section lp-science">
          <div className="lp-section-heading"><p className="lp-eyebrow">03 / FUNDAMENTOS</p><h2>As contas aparecem.<br/><span>As fontes também.</span></h2><p>Uma estimativa precisa poder ser explicada. A área de nutrição apresenta equações publicadas, parâmetros editáveis e a distribuição dos macronutrientes.</p><a className="lp-text-link" href={laboratoryUrl}>Explorar nutrição e fundamentos <ArrowUpRight size={17}/></a></div>
          <div className="lp-method-list"><article><span>01</span><div><h3>Equações identificadas</h3><p>Mifflin–St Jeor e Harris–Benedict revisada. Fórmula, unidades e hipóteses visíveis.</p></div></article><article><span>02</span><div><h3>Treino com contexto</h3><p>Divisão, execução e volume são discutidos com referências e limites de aplicação.</p></div></article><article><span>03</span><div><h3>Converse sobre o treino</h3><p>O chat de IA usa temas e fontes delimitados. Os cálculos da nutrição são feitos por código; os parâmetros da calculadora não são enviados automaticamente à IA.</p><p className="lp-chat-privacy">Com seu consentimento, as mensagens enviadas ao chat são compartilhadas com o provedor de IA. Evite incluir informações pessoais ou de saúde.</p></div></article><p className="lp-method-note">Conteúdo educativo para adultos saudáveis. Estimativas e explicações não substituem avaliação individual; fichas exigem revisão do instrutor.</p></div>
        </div></section>
        <section id="projeto" className="lp-project-section"><div className="lp-container lp-section">
          <div className="lp-project-heading"><div><p className="lp-eyebrow">04 / O PROJETO</p><h2>Construído para aprender.<br/><span>Pensado para funcionar.</span></h2></div><span className="lp-stage">Em desenvolvimento e validação</span></div>
          <div className="lp-project-grid"><article><h3>Arquitetura</h3><p>Aplicativo web em HTML, CSS e JavaScript, API Express e PostgreSQL no Neon com Prisma. A landing usa React e Vite.</p><div className="lp-tech">JavaScript <span>/</span> Node.js <span>/</span> Express <span>/</span> Prisma</div></article><article><h3>Estado da entrega</h3><p>Gestão, sessões, histórico de cargas e nutrição foram verificados com dados demonstrativos. O aplicativo está publicado na Vercel com PostgreSQL no Neon; login dos três perfis e persistência foram confirmados. O chat de IA está configurado no plano gratuito da Groq e amostras de respostas foram verificadas na publicação; isso não valida toda resposta futura.</p><p className="lp-delivery-payment">O controle financeiro registra mensalidades e ajustes. O checkout Pix/cartão via Mercado Pago continua indisponível: faltam credenciais, contas de teste e validação do webhook.</p><details><summary>Consultar próximos passos <ChevronDown size={15}/></summary><ul><li>Validar instalação e sincronização em telefone físico.</li><li>Configurar e testar Pix/cartão e webhook com contas de teste do Mercado Pago.</li><li>Ampliar a avaliação das respostas da IA e a revisão pelo instrutor.</li></ul></details></article></div>
          <div className="lp-project-links"><a href="https://github.com/EznRB/FitFlow" target="_blank" rel="noopener noreferrer">Código do sistema <ArrowUpRight size={16}/></a><a href="https://github.com/EznRB/fitflow-LP" target="_blank" rel="noopener noreferrer">Código da apresentação <ArrowUpRight size={16}/></a></div>
        </div></section>
        <section className="lp-container lp-final"><div><p className="lp-eyebrow">FITFLOW CARAGUÁ</p><h2>A próxima etapa<br/>começa na rotina.</h2></div><a href={appUrl} className="lp-button">Conhecer o FitFlow <ArrowUpRight size={18}/></a></section>
      </main>
      <footer className="lp-footer lp-container"><a className="lp-brand" href="#inicio"><Dumbbell size={23} aria-hidden="true"/><span>FITFLOW<small>CARAGUÁ</small></span></a><div><strong>Enzo Marcelo Ribeiro Fermiano</strong><p>Análise e Desenvolvimento de Sistemas · 2026</p></div><span>Caraguatatuba, SP</span></footer>
    </div>
  );
}
// Reutiliza o ícone da biblioteca sem criar um desenho decorativo próprio.
function ArrowDownIcon() { return <ChevronDown size={16} aria-hidden="true"/>; }
