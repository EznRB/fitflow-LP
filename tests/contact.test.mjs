import test from 'node:test';
import assert from 'node:assert/strict';
import { prepareContactEmail } from '../src/lib/contact.ts';

test('contato conserva acentos, quebras e símbolos no corpo sem criar outros cabeçalhos', () => {
  const message = 'Quero conhecer o FitFlow.\nComo funciona? &cc=terceiro@example.org';
  const result = prepareContactEmail({ name: '  João da Silva  ', email: ' joao@example.org ', message });
  assert.equal(result.ok, true);
  const url = new URL(result.url);
  assert.equal(url.pathname, 'Enzomarcelo.modulo@gmail.com');
  assert.equal(url.searchParams.get('subject'), 'Contato — FitFlow Caraguá');
  assert.equal(url.searchParams.get('cc'), null);
  assert.equal(url.searchParams.get('body'), `Nome: João da Silva\nE-mail para resposta: joao@example.org\n\nMensagem:\n${message}`);
});

test('nenhum rascunho é preparado com campos vazios ou e-mail inválido', () => {
  for (const email of ['', 'sem-arroba', 'a@', 'a@b', 'a b@example.org', 'a@example.org\nBcc:x@example.org']) {
    const result = prepareContactEmail({ name: 'Maria', email, message: 'Preciso de suporte.' });
    assert.equal(result.ok, false, email);
    assert.ok(result.errors.email);
  }
  const result = prepareContactEmail({ name: '  ', email: 'maria@example.org', message: '\n ' });
  assert.equal(result.ok, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.message);
});

test('limites de tamanho impedem gerar um link de e-mail excessivo', () => {
  const result = prepareContactEmail({ name: 'a'.repeat(101), email: 'a'.repeat(260), message: 'a'.repeat(1201) });
  assert.equal(result.ok, false);
  assert.deepEqual(Object.keys(result.errors).sort(), ['email', 'message', 'name']);
});
