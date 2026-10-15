/** Resolve destinos públicos sem transformar query ou fragmento em um caminho. */
export function resolveAppLinks(configuredUrl?: string, development = false) {
  const fallback = 'https://fit-flow-indol.vercel.app/';
  const input = configuredUrl?.trim() || fallback;
  let url: URL;
  try { url = new URL(input); }
  catch { throw new Error('VITE_APP_URL precisa ser uma URL absoluta do aplicativo.'); }
  const localHttp = development && url.protocol === 'http:' && ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname);
  if ((url.protocol !== 'https:' && !localHttp) || url.username || url.password || /[?#]/.test(input)) {
    // Não copiar o valor configurado para logs: uma configuração incorreta pode conter credenciais.
    throw new Error('VITE_APP_URL exige HTTPS, sem credenciais, query ou fragmento. HTTP é permitido apenas no loopback de desenvolvimento.');
  }
  url.pathname = url.pathname.replace(/\/?$/, '/');
  return { appUrl: url.href, laboratoryUrl: new URL('laboratorio.html', url).href };
}
