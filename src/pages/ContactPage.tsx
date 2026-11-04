import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Dumbbell, Mail } from 'lucide-react';
import { CONTACT_EMAIL, prepareContactEmail } from '../lib/contact';
import type { ContactErrors, ContactFields } from '../lib/contact';
import { resolveAppLinks } from '../lib/app-links';
import '../landing.css';
import '../contact.css';

const { appUrl } = resolveAppLinks(import.meta.env.VITE_APP_URL
  || (import.meta.env.DEV ? 'http://127.0.0.1:3107/' : undefined), import.meta.env.DEV);

export default function ContactPage() {
  const [fields, setFields] = useState<ContactFields>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [preparedUrl, setPreparedUrl] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Contato | FitFlow Caraguá';
    return () => { document.title = previousTitle; };
  }, []);
  function update(field: keyof ContactFields, value: string) {
    setFields(current => ({ ...current, [field]: value }));
    setErrors(current => ({ ...current, [field]: undefined }));
    setPreparedUrl('');
  }
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = prepareContactEmail(fields);
    if (!result.ok) {
      setErrors(result.errors);
      const firstInvalid = Object.keys(result.errors)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    setErrors({});
    setPreparedUrl(result.url);
  }
  return <div className="fitflow-landing lp-contact-page">
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="lp-header"><div className="lp-container lp-header-inner">
      <a className="lp-brand" href="/" aria-label="FitFlow Caraguá, início"><Dumbbell size={27} aria-hidden="true"/><span>FITFLOW<small>CARAGUÁ</small></span></a>
      <nav className="lp-contact-nav" aria-label="Navegação principal"><a href="/">Início</a><a href="/sobre">Sobre nós</a><a href="/contato" aria-current="page">Contato</a></nav>
      <div className="lp-header-actions"><a href={appUrl} className="lp-button lp-button-small">Login <ArrowUpRight size={16} aria-hidden="true"/></a></div>
    </div></header>
    <main id="conteudo" className="lp-container lp-contact-main" tabIndex={-1}>
      <section className="lp-contact-intro" aria-labelledby="contact-title">
        <a href="/" className="lp-text-link"><ArrowLeft size={16} aria-hidden="true"/> Voltar à apresentação</a>
        <p className="lp-eyebrow">FITFLOW CARAGUÁ / CONTATO</p>
        <h1 id="contact-title">Vamos conversar<br/>sobre a sua rotina.</h1>
        <p>Tire dúvidas sobre o projeto, peça uma demonstração ou relate uma dificuldade com o sistema.</p>
        <div className="lp-contact-channel"><Mail size={21} aria-hidden="true"/><div><h2>Contato do projeto</h2><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></div></div>
        <p className="lp-contact-note">Este canal atende ao projeto acadêmico FitFlow. Matrículas, pagamentos e fichas de treino são administrados pela academia dentro do sistema.</p>
      </section>
      <section className="lp-contact-panel" aria-labelledby="form-title">
        <h2 id="form-title">O que você precisa?</h2>
        <p className="lp-contact-help">Todos os campos são obrigatórios. Depois de preparar a mensagem, abra seu aplicativo de e-mail e confirme o envio.</p>
        <form ref={formRef} onSubmit={submit} noValidate>
          <div className="lp-contact-field"><label htmlFor="contact-name">Nome</label><input id="contact-name" name="name" autoComplete="name" required maxLength={100} value={fields.name} onChange={event => update('name', event.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined}/>{errors.name && <p className="lp-contact-error" id="name-error">{errors.name}</p>}</div>
          <div className="lp-contact-field"><label htmlFor="contact-email">E-mail para resposta</label><input id="contact-email" name="email" type="email" autoComplete="email" inputMode="email" required maxLength={254} value={fields.email} onChange={event => update('email', event.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined}/>{errors.email && <p className="lp-contact-error" id="email-error">{errors.email}</p>}</div>
          <div className="lp-contact-field"><label htmlFor="contact-message">Mensagem ou motivo do contato</label><textarea id="contact-message" name="message" required rows={5} maxLength={1200} value={fields.message} onChange={event => update('message', event.target.value)} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error message-help' : 'message-help'}/>{errors.message && <p className="lp-contact-error" id="message-error">{errors.message}</p>}<p id="message-help" className="lp-contact-privacy">Conte apenas o necessário para o atendimento. Não inclua senhas, dados financeiros ou informações de saúde.</p></div>
          <button className="lp-button lp-contact-submit" type="submit">Preparar e-mail <ArrowUpRight size={18} aria-hidden="true"/></button>
          {preparedUrl && <div className="lp-contact-result" role="status"><h3>Mensagem preparada</h3><p>Abra o rascunho abaixo e envie pelo seu aplicativo de e-mail. Se ele não abrir, copie o endereço e os campos acima. Seu texto permanece disponível nesta página.</p><a className="lp-text-link" href={preparedUrl}>Abrir aplicativo de e-mail <ArrowUpRight size={16} aria-hidden="true"/></a><p className="lp-contact-privacy">A mensagem ainda não foi enviada. Este formulário não salva seus dados no banco do FitFlow.</p></div>}
        </form>
      </section>
    </main>
    <footer className="lp-footer lp-container"><a className="lp-brand" href="/"><Dumbbell size={23} aria-hidden="true"/><span>FITFLOW<small>CARAGUÁ</small></span></a><div><strong>Enzo Marcelo Ribeiro Fermiano</strong><p>Análise e Desenvolvimento de Sistemas · 2026</p></div><a className="lp-text-link" href="/contato" aria-current="page">Contato</a></footer>
  </div>;
}
