export const CONTACT_EMAIL = 'Enzomarcelo.modulo@gmail.com';
export type ContactFields = { name: string; email: string; message: string };
export type ContactErrors = Partial<Record<keyof ContactFields, string>>;
type ContactResult = { ok: true; url: string } | { ok: false; errors: ContactErrors };

/** Prepara um rascunho; abrir o cliente de e-mail não confirma o envio. */
export function prepareContactEmail(fields: ContactFields): ContactResult {
  const name = fields.name.trim();
  const email = fields.email.trim();
  const message = fields.message.trim();
  const errors: ContactErrors = {};
  if (!name || name.length > 100) errors.name = 'Informe seu nome, com até 100 caracteres.';
  if (!email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Informe um e-mail válido para receber a resposta.';
  if (!message || message.length > 1200) errors.message = 'Escreva sua mensagem, com até 1.200 caracteres.';
  if (Object.keys(errors).length) return { ok: false, errors };
  const body = `Nome: ${name}\nE-mail para resposta: ${email}\n\nMensagem:\n${message}`;
  return { ok: true, url: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Contato — FitFlow Caraguá')}&body=${encodeURIComponent(body)}` };
}
