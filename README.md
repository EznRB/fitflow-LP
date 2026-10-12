# FitFlow Caraguá — landing pública

React, TypeScript e Vite. Mantém a identidade laranja/navy e apresenta produto, jornadas, ciência e autoria acadêmica. Autenticação e persistência pertencem ao [aplicativo FitFlow](https://github.com/EznRB/FitFlow).

```powershell
npm ci
npm run dev -- --host 127.0.0.1 --port 3108
npm run lint
npm run build
```

Node.js 24.x. `VITE_APP_URL` configura a URL pública do aplicativo; no desenvolvimento o fallback é `http://127.0.0.1:3107/`. Em produção, o padrão aponta para [FitFlow](https://fit-flow-indol.vercel.app/).

O aplicativo está publicado na Vercel com PostgreSQL no Neon. Autenticação, sessões e quota passaram por testes no banco remoto; login dos três perfis e persistência também foram confirmados na publicação com dados demonstrativos. O chat está configurado com a Groq Free e amostras de respostas foram verificadas na publicação; essa avaliação não certifica toda resposta futura. O checkout Pix/cartão via Mercado Pago continua indisponível, aguardando credenciais, contas de teste e validação do webhook. A instalação e sincronização em telefone físico ainda precisam de validação.

Os parâmetros da calculadora de nutrição não são enviados automaticamente à IA. As mensagens que a pessoa envia ao chat são compartilhadas com o provedor mediante consentimento, podendo conter informações digitadas por ela.

Não há chave de IA, backend, gestão simulada ou dados de alunos neste repositório. Foram removidas as antigas páginas `/dashboard`, bibliotecas usadas somente por essas demonstrações e o serviço Gemini no navegador.

A imagem `public/fitflow-hero-v2.png` foi gerada para esta apresentação e é identificada como ilustração na página. O conteúdo evita afirmar que integrações externas ainda pendentes já estão publicadas.

`public/dashboard-demonstracao.jpg` é uma captura real do painel publicado em 12 de outubro de 2026, copiada de `docs/evidence/66-dashboard-workspace-vercel.png` do aplicativo. O arquivo de origem tem conteúdo JPEG, apesar da extensão `.png`; a cópia preserva os bytes e usa a extensão correspondente. Os dados são demonstrativos e não representam resultados comerciais. A landing mantém laranja/navy, usa Barlow Condensed nos títulos e uma seção científica creme/navy; o menu mobile inclui acesso ao aplicativo.

Esta revisão visual e de conteúdo foi preparada localmente em 12 de outubro de 2026. Hero, fundamentos e captura real do produto foram inspecionados no navegador; menu e captura também foram conferidos em 375 × 812. Documento de 360 pixels nessa emulação e de 753 pixels em 768 × 1024, sem transbordamento horizontal. A captura real carregou com 1298 pixels de origem e 312 pixels de apresentação mobile; abrir a versão completa continua disponível. Jornadas alternaram o conteúdo. Emulação não comprova aparelho físico. A confirmação pública posterior está na seção Publicação atual.

A verificação local encontrou que Escape não fechava o menu mobile. Após o ajuste, o navegador confirmou `aria-expanded=false` e foco no botão; os cinco links do menu mediram 49 pixels de altura. Clique em “Conhecer os fluxos”, fora do cabeçalho, fechou o menu e preservou a navegação para `#rotina`; não devolveu foco indevidamente ao botão. Os listeners são removidos ao fechar ou desmontar o componente, e Escape só atua no breakpoint mobile. Build/typecheck e diff check aprovados; nenhuma nova dependência. Capturas locais guardadas na pasta de evidências ignorada do aplicativo (91, 92, 94 e 97); ainda não são prova desta landing publicada.

Autoria: Enzo Marcelo Ribeiro Fermiano — Análise e Desenvolvimento de Sistemas, 2026.

## Publicação atual — 12/10/2026

Código `754b27f` (`754b27f60cb9eb3886410ddc89970b64a16cee7a`), Production READY `dpl_G157NAMK6HzXawYqQi1ZHBry48DS`, [domínio final](https://fitflow-lp.vercel.app/) e [URL exata](https://fitflow-2nzi5b3g2-eznrbs-projects.vercel.app). Build/typecheck passaram localmente e na Vercel. Gate público confirmou HTTP 200 e igualdade SHA-256 do HTML, JS, CSS, hero e captura real. Bundle aponta ao aplicativo canônico, sem localhost; privacidade do chat e checkout indisponível aparecem no código servido. Nenhuma transação foi realizada.

Navegador público confirmou hero e fundamentos; em 375 × 812, documento de 360 pixels, CTA mobile para o aplicativo canônico, Escape fechando menu e retornando foco ao botão. Captura real carregada e identificada como demonstração. [Hero publicado](docs/evidence/98-landing-vercel.jpg), [fundamentos publicados](docs/evidence/100-landing-fundamentos-vercel.jpg) e [apresentação mobile publicada](docs/evidence/101-landing-produto-mobile-vercel.jpg). Os nomes JPEG refletem os bytes da captura. Não certifica toda acessibilidade nem aparelho físico.

PR [#1](https://github.com/EznRB/fitflow-LP/pull/1) permanece draft; a branch principal não foi mesclada. A pesquisa/revisão de UX completa do sistema e os gates de telefone e pagamentos continuam em andamento.

## Verificação contínua

Workflow [Verify landing](.github/workflows/verify.yml) introduzido em `1b2f5ef`: Node 24, dependências do lockfile e build/typecheck em push e PR. Ações oficiais fixadas em SHA, permissões somente de leitura e cancelamento de execução antiga do mesmo grupo; não publica nem recebe segredos. [Push aprovado](https://github.com/EznRB/fitflow-LP/actions/runs/38283168201) e [PR aprovado](https://github.com/EznRB/fitflow-LP/actions/runs/38283168424) para o SHA `1b2f5ef98bcc169ec1ad0c4f46df08bcd0df2afc`. Isso confirma o runtime Node 24 da CI; a verificação local usou Node 25.7.0.

## Histórico de publicação — 08/10/2026

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

`.vercelignore` exclui ambientes, arquivos locais, dependências, builds e documentação do upload. `.env.local` e `.vercel/` permanecem ignorados pelo Git. As alterações de desenvolvimento estão na branch `codex/landing-improvements` e devem ser revisadas por pull request antes de integrar `main`. O roteiro desta seção registra a publicação de 08/10; a revisão e as provas atuais estão em Publicação atual. Auditoria npm executada novamente em 12/10 retornou zero vulnerabilidades conhecidas, incluindo dependências de desenvolvimento.
