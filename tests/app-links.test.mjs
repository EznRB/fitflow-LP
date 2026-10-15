import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveAppLinks } from '../src/lib/app-links.ts';

test('publicação padrão aponta aplicativo e laboratório para a origem canônica', () => {
  assert.deepEqual(resolveAppLinks(), { appUrl: 'https://fit-flow-indol.vercel.app/',
    laboratoryUrl: 'https://fit-flow-indol.vercel.app/laboratorio.html' });
});
test('barra final e prefixo de caminho produzem um destino real do laboratório', () => {
  for (const base of ['https://example.org/fitflow', 'https://example.org/fitflow/']) {
    assert.deepEqual(resolveAppLinks(base), { appUrl: 'https://example.org/fitflow/',
      laboratoryUrl: 'https://example.org/fitflow/laboratorio.html' });
  }
});
test('query e fragmento na configuração não viram uma navegação para o app em vez do laboratório', () => {
  for (const base of ['https://fit-flow-indol.vercel.app/?from=lp', 'https://fit-flow-indol.vercel.app/#login']) {
    assert.throws(() => resolveAppLinks(base), /VITE_APP_URL/);
  }
});
test('origem publicada recusa credenciais e protocolos que não sejam HTTPS', () => {
  for (const base of ['http://example.org/', 'javascript:alert(1)', 'data:text/html,test', '/relative/',
    'https://username:password@example.org/', 'https://username@example.org/', 'https://example.org/?']) {
    assert.throws(() => resolveAppLinks(base), /VITE_APP_URL/);
  }
});
test('desenvolvimento permite HTTP somente em loopback explícito e nunca muda padrão de produção', () => {
  assert.equal(resolveAppLinks('http://127.0.0.1:3107/', true).appUrl, 'http://127.0.0.1:3107/');
  for (const base of ['http://localhost:3107/', 'http://127.0.0.1:3107/', 'http://[::1]:3107/']) {
    assert.equal(resolveAppLinks(base, true).laboratoryUrl, new URL('laboratorio.html', base).href);
    assert.throws(() => resolveAppLinks(base, false), /VITE_APP_URL/);
  }
  assert.throws(() => resolveAppLinks('http://example.org/', true), /VITE_APP_URL/);
});
