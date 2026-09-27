# GEMINI.md — MANUAL ARQUITETURAL PERPÉTUO DA WD WEB STUDIO

> **Versão do Documento:** 1.1.0  
> **Data de Atualização:** 26 de Setembro de 2026  
> **Status:** Ativo & Em Produção  
> **Sede:** Umuarama — Paraná — Brasil (Atendimento Nacional e Remoto)

---

## 1. VISÃO E POSICIONAMENTO DA MARCA

A **WD Web Studio** é um estúdio digital boutique que desenvolve websites e presenças digitais estratégicas para profissionais liberais de alta exigência (médicos, clínicas, advogados e contadores) e empresas de serviços que recusam soluções genéricas, templates descartáveis e o visual automatizado de agências convencionais.

### Posicionamento Central
> **"Sites premium para profissionais que precisam de autoridade, conformidade e resultados."**

### Personalidade de Marca
> **"Uma empresa pequena o suficiente para ser cuidadosa nos detalhes e sofisticada o suficiente para trabalhar com profissionais de alto valor."**

### O Que a WD Web Studio NÃO É:
* NÃO é uma agência de publicidade genérica que usa templates pré-fabricados de WordPress com excesso de plugins.
* NÃO é uma fábrica de "landing pages de alta conversão" baratas, com relógios de escassez falsos e gatilhos agressivos de infoproduto.
* NÃO constrói interfaces no estilo cyberpunk, cripto, SaaS espalhafatoso ou gerado por inteligência artificial sem curadoria editorial.
* NÃO faz promessas milagrosas de faturamento, métricas sem comprovação empírica ou garantias jurídicas de imunidade a fiscalizações.

---

## 2. DIRETRIZES DE DESIGN SYSTEM EDITORIAL TECH

### Paleta de Cores Estrita
| Token | Cor Hexadecimal | Aplicação Principal |
| :--- | :--- | :--- |
| `Deep Graphite` | `#0B0F0E` | Fundo principal da página e containers de máxima profundidade |
| `Graphite` | `#121816` | Superfície dos cards, headers e componentes estruturais |
| `Green Graphite`| `#17211E` | Superfícies elevadas, mockups e hovers refinados |
| `Off White` | `#F3F5F2` | Textos principais, títulos e contraste de alta legibilidade |
| `Soft Gray` | `#A8B2AE` | Parágrafos de apoio, metadados e legendas secundárias |
| `Signature Emerald`| `#18C98B` | Acentos primários, botões de ação e ícones de verificação |
| `Deep Emerald` | `#087A59` | Gradientes de profundidade e estados hover de alta densidade |
| `Champagne` | `#C8A96B` | Uso sutil e pontual em detalhes de autoridade e no case Janeiro Advocacia |
| `Borders / Linhas`| `#27332F` | Linhas delimitadoras, divisórias sutis e grade técnica |

### Tipografia
* **Títulos e Display:** `Manrope` (pesos 600, 700, 800) — Tipografia técnica, sólida, geométrica e contemporânea.
* **Corpo e Leitura:** `Inter` (pesos 400, 500, 600) — Máxima legibilidade em telas de qualquer densidade de pixels.

### Elemento Proprietário: WD Grid
Grade fina com linhas em `rgba(39, 51, 47, 0.35)` e nós sutis em `Signature Emerald`, simbolizando precisão técnica, arquitetura de software e os 8 pilares da marca.

---

## 3. OS 8 PILARES ESTRUTURAIS DA METODOLOGIA WD

1. **Posicionamento e Proposta de Valor Única:** Clareza cirúrgica imediata da proposta profissional;
2. **Arquitetura de Informação:** Hierarquia sem dispersão, guiando a leitura até a ação qualificada;
3. **Design Editorial Anti-clichê:** Tipografia expressiva, paleta sóbria e imagens autênticas com enquadramento profissional;
4. **Copywriting de Autoridade:** Textos sóbrios e informativos que conectam as necessidades do cliente à competência técnica do profissional;
5. **Lead Tracking Contextualizado no WhatsApp:** Disparos direcionados com identificação do serviço ou área de interesse;
6. **Alinhamento com Diretrizes Éticas e Regulatórias:** Projetado considerando boas práticas e resoluções vigentes (CFM, OAB, CFC);
7. **Código Limpo, Estático e Otimizado:** Código nativo sem dependências inchadas, estruturado para performance consistente e Core Web Vitals;
8. **Decisão Sem Atrito:** Condução natural do visitante qualificado ao agendamento ou contato direto.

---

## 4. DIRETÓRIO DE ARQUIVOS E MAPEAMENTO DE ROTAS

| Rota / Arquivo | Descrição e Finalidade |
| :--- | :--- |
| `index.html` (`/`) | Home page com arquitetura completa, proposta de valor, portfólio oficial e comparativo |
| `about.html` (`/about`) | Manifesto do estúdio, origens em Umuarama/PR, metodologia e visão boutique |
| `sites-para-medicos.html` | Solução médica com foco na Resolução CFM 2.336/2023 e consultório digital ético |
| `sites-para-clinicas.html` | Solução para centros de saúde, corpo clínico integrado e roteamento setorial |
| `sites-para-advogados.html`| Solução jurídica com alinhamento sóbrio ao Provimento 205/2021 da OAB |
| `sites-para-contadores.html`| Solução para escritórios contábeis, BPO financeiro e inteligência tributária |
| `portfolio.html` (`/portfolio`) | Os 4 cases oficiais com capturas reais de tela e links diretos |
| `auditoria-de-site.html` | Diagnóstico técnico e de posicionamento de 5 critérios com integração WhatsApp |
| `blog.html` (`/blog`) | Índice de ensaios e artigos técnicos sobre autoridade, ética e performance |
| `artigos/por-que-sites-comuns-falham-na-conversao.html` | Ensaio analítico sobre velocidade, clichês e atrito na experiência do usuário |
| `artigos/conformidade-crm-e-oab-em-sites-profissionais.html` | Guia analítico sobre publicidade médica e advocacia sob normas vigentes |
| `artigos/posicionamento-digital-para-escritorios-contabeis.html` | Artigo sobre transição da contabilidade operacional para consultiva e BPO |
| `termos-e-politicas.html` | Termos de Uso, Política de Privacidade LGPD, Gestão de Cookies e Disclaimers |
| `styles.css` | Sistema de design completo com paleta estrita, WD Grid, previews reais e acessibilidade |
| `script.js` | Scripts interativos (menu mobile com suporte a teclado ESC, banner LGPD, FAQ e WhatsApp) |
| `vercel.json` | Configuração de cleanUrls e cabeçalhos modernos de segurança (CSP, HSTS, Permissions-Policy) |
| `sitemap.xml` & `robots.txt` | Indexação técnica para motores de busca com 13 rotas canônicas |

---

## 5. OS 4 CASES REAIS DO PORTFÓLIO OFICIAL

Todos os projetos do portfólio são reais, verificáveis e possuem links externos ativos:

1. **WD Informática**
   - **Categoria Oficial:** `TECNOLOGIA / INFORMÁTICA`
   - **Descrição:** "Site institucional para empresa de tecnologia, assistência técnica e soluções digitais."
   - **URL Oficial:** `https://www.wdinformatica.com.br/`
   - **Preview:** `assets/cases/preview-wd-informatica.png`

2. **Bandoch Alves**
   - **Categoria Oficial:** `CONTABILIDADE`
   - **Descrição:** "Presença digital estratégica para escritório de contabilidade e estratégia tributária."
   - **URL Oficial:** `https://www.bandochalvescontabilidade.com.br/`
   - **Preview:** `assets/cases/preview-bandoch-alves.png`

3. **Janeiro Advocacia**
   - **Categoria Oficial:** `DIREITO PREVIDENCIÁRIO`
   - **Descrição:** "Site institucional para escritório especializado em Direito Previdenciário."
   - **URL Oficial:** `https://www.janeiroadvocacia.com.br/`
   - **Preview:** `assets/cases/preview-janeiro-advocacia.png`

4. **Focin Farma**
   - **Categoria Oficial:** `FARMÁCIA DE MANIPULAÇÃO VETERINÁRIA`
   - **Descrição:** "Presença digital para empresa especializada em soluções de manipulação veterinária."
   - **URL Oficial:** `https://www.focinfarma.com.br/`
   - **Preview:** `assets/cases/preview-focin-farma.png`

---

## 6. REGRAS INVIOLÁVEIS DE VERACIDADE E COMPLIANCE

### 1. Regra de Veracidade Absoluta (Anti-Fabricação)
* É expressamente proibido inventar depoimentos fictícios, métricas numéricas sem comprovação empírica (ex.: "aumento de 300% em leads", "carregamento em 0.7s"), selos falsos ou garantias de resultados financeiros.
* Comunicação sempre baseada em aspectos técnicos objetivos, arquiteturais e de qualidade de posicionamento.

### 2. Isenção e Disclaimer Obrigatório de Compliance
Nenhuma página da WD Web Studio pode alegar blindagem jurídica absoluta ou garantia contra sanções éticas. A formulação padrão obrigatória é:
> *"A estrutura técnica e de conteúdo é desenvolvida considerando boas práticas e regras aplicáveis ao segmento. A validação jurídica ou regulatória específica permanece sob responsabilidade do profissional ou de seu assessor jurídico."*

---

## 7. INFRAESTRUTURA, DEPENDÊNCIAS E SEGURANÇA

* **Hospedagem Recomendada:** Vercel (Edge Network) com suporte nativo a `cleanUrls`.
* **Dependências Externas Fixas:** 
  - Google Fonts (`Inter` e `Manrope`).
  - Lucide Icons CDN com versão pinada: `https://unpkg.com/lucide@0.441.0/dist/umd/lucide.min.js`.
* **Cabeçalhos de Segurança:** Configurados em `vercel.json`:
  - `Content-Security-Policy` (scripts, estilos, fontes, imagens e conexões permitidas)
  - `Permissions-Policy` (desativação de APIs sensíveis não utilizadas)
  - `Strict-Transport-Security` (HSTS com preload)
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
