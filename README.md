# FitFlow Caraguá — landing pública

React, TypeScript e Vite. Mantém a identidade laranja/navy e apresenta produto, jornadas, ciência e autoria acadêmica. Autenticação e persistência pertencem ao [aplicativo FitFlow](https://github.com/EznRB/FitFlow).

```powershell
npm ci
npm run dev -- --host 127.0.0.1 --port 3108
npm run lint
npm run build
```

Node.js 24.x. `VITE_APP_URL` configura a URL pública do aplicativo; no desenvolvimento o fallback é `http://127.0.0.1:3107/`. Em produção, o padrão aponta para [FitFlow](https://fit-flow-indol.vercel.app/).

O aplicativo está publicado na Vercel com PostgreSQL no Neon. Autenticação, sessões e quota passaram por testes no banco remoto; login dos três perfis e persistência também foram confirmados na publicação com dados demonstrativos. IA externa, Pix/cartão em sandbox e validação em telefone físico continuam pendentes.

Não há chave de IA, backend, gestão simulada ou dados de alunos neste repositório. Foram removidas as antigas páginas `/dashboard`, bibliotecas usadas somente por essas demonstrações e o serviço Gemini no navegador.

A imagem `public/fitflow-hero-v2.png` foi gerada para esta apresentação e é identificada como ilustração na página. O conteúdo evita afirmar que integrações externas ainda pendentes já estão publicadas.

Autoria: Enzo Marcelo Ribeiro Fermiano — Análise e Desenvolvimento de Sistemas, 2026.

## Publicação verificada

Landing publicada em [fitflow-lp.vercel.app](https://fitflow-lp.vercel.app/) em 8 de outubro de 2026. O build usa Node.js 24.x, executa o typecheck e foi verificado em preview e em produção: HTML, JavaScript, CSS e imagem retornam HTTP 200. Os links de acesso apontam para `https://fit-flow-indol.vercel.app/`. A auditoria npm retornou zero vulnerabilidades.

Publicação no projeto `fitflow-lp`, equipe `eznrbs-projects`:

```powershell
vercel project inspect fitflow-lp --scope eznrbs-projects --non-interactive
vercel link --yes --scope eznrbs-projects --project fitflow-lp
npm run build
npm audit
vercel deploy --yes --scope eznrbs-projects --non-interactive
vercel deploy --prod --skip-domain --yes --scope eznrbs-projects --non-interactive
# Verificar o deployment de produção gerado antes de promover o mesmo build.
vercel promote <url-do-deployment-verificado> --scope eznrbs-projects --yes --non-interactive
```

`.vercelignore` exclui ambientes, arquivos locais, dependências, builds e documentação do upload. `.env.local` e `.vercel/` permanecem ignorados pelo Git. As alterações de desenvolvimento estão na branch `codex/landing-improvements` e devem ser revisadas por pull request antes de integrar `main`. O texto de estado atualizado acompanha essa revisão; a publicação atual corresponde ao build verificado acima.
