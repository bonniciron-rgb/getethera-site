const isPortuguese = document.documentElement.lang.toLowerCase().startsWith("pt");

const demoCopy = {
  en: {
    mailSubject: "Ethera demo request",
    fields: {
      name: "Name",
      email: "Email",
      business: "Business",
      businessType: "Business type",
      interest: "Main interest",
      focus: "Demo focus:",
    },
    steps: [
      {
        kicker: "Step 1",
        title: "Marketing and SEO signals reveal the gap.",
        body:
          "A Lisbon service business sees demand from ads, QR codes and search, but conversion varies by source and follow-up speed.",
        visual: `
          <article class="visual-card">
            <header><span>Lead Gen + Marketing Studio</span><span>Signal review</span></header>
            <div class="content">
              <div class="ad-creative">
                <strong>Strong lead volume, weak booked-trial rate from local search.</strong>
                <span class="pill">Needs a focused play</span>
              </div>
            </div>
          </article>
        `,
      },
      {
        kicker: "Step 2",
        title: "Strategy Studio creates the next play.",
        body:
          "Strategy Studio turns the signal into a Strategy Snapshot, then recommends a weekly play with the owner, channel and success metric.",
        visual: `
          <article class="visual-card">
            <header><span>Strategy Studio</span><span>Beta Weekly Play</span></header>
            <div class="content">
              <div class="chat-row">Play: refresh GBP offer post.</div>
              <div class="chat-row bot">Add QR source tag to the matching campaign.</div>
              <div class="chat-row">Metric: booked trials from local search.</div>
              <div class="chat-row bot">Review outcome in 7 days.</div>
            </div>
          </article>
        `,
      },
      {
        kicker: "Step 3",
        title: "The campaign runs with attribution intact.",
        body:
          "The team launches the play across Meta, QR codes, website CTAs and WhatsApp intake, while Ethera keeps campaign source attached.",
        visual: `
          <article class="visual-card">
            <header><span>Campaign pipeline</span><span>Source preserved</span></header>
            <div class="content">
              <div class="pipeline-row">
                <div><strong>New</strong><div class="lead-card">QR lead<br />GBP offer</div></div>
                <div><strong>Contacted</strong><div class="lead-card">Meta ad<br />Trial ask</div></div>
                <div><strong>Booked</strong><div class="lead-card">Website CTA<br />Thursday</div></div>
              </div>
            </div>
          </article>
        `,
      },
      {
        kicker: "Step 4",
        title: "CRM Studio keeps conversion operational.",
        body:
          "WhatsApp intake, pipeline, bookings and customer operations sit beside the marketing source, so every campaign can be measured through conversion.",
        visual: `
          <article class="visual-card">
            <header><span>CRM Studio</span><span>Conversion flow</span></header>
            <div class="content">
              <div class="metric-grid">
                <div><span>Inbox</span><strong>Live</strong></div>
                <div><span>Pipeline</span><strong>38</strong></div>
                <div><span>Bookings</span><strong>17</strong></div>
                <div><span>Renewals</span><strong>Tracked</strong></div>
              </div>
            </div>
          </article>
        `,
      },
      {
        kicker: "Step 5",
        title: "The next strategy learns from the outcome.",
        body:
          "Executed, deferred and rejected plays are measured against actual leads, bookings and revenue so the next cycle starts smarter.",
        visual: `
          <article class="visual-card">
            <header><span>Outcome measurement</span><span>Next cycle</span></header>
            <div class="content">
              <div class="metric-grid">
                <div><span>Leads</span><strong>124</strong></div>
                <div><span>Trials</span><strong>38</strong></div>
                <div><span>Won</span><strong>17</strong></div>
                <div><span>Next play</span><strong>Ready</strong></div>
              </div>
            </div>
          </article>
        `,
      },
    ],
  },
  pt: {
    mailSubject: "Pedido de demonstração Ethera",
    fields: {
      name: "Nome",
      email: "Email",
      business: "Empresa",
      businessType: "Tipo de negócio",
      interest: "Principal interesse",
      focus: "Foco da demonstração:",
    },
    steps: [
      {
        kicker: "Passo 1",
        title: "Os sinais de marketing e SEO revelam a oportunidade.",
        body:
          "Um negócio de serviços em Lisboa recebe procura através de anúncios, códigos QR e pesquisa, mas a conversão varia por origem e rapidez de resposta.",
        visual: `
          <article class="visual-card">
            <header><span>Lead Gen + Marketing Studio</span><span>Análise de sinais</span></header>
            <div class="content">
              <div class="ad-creative">
                <strong>Bom volume de leads, mas baixa taxa de marcações vindas da pesquisa.</strong>
                <span class="pill">Precisa de uma ação focada</span>
              </div>
            </div>
          </article>
        `,
      },
      {
        kicker: "Passo 2",
        title: "O Strategy Studio cria a próxima ação.",
        body:
          "O Strategy Studio transforma o sinal num resumo estratégico e recomenda uma ação semanal com responsável, canal e métrica de sucesso.",
        visual: `
          <article class="visual-card">
            <header><span>Strategy Studio</span><span>Acao semanal Beta</span></header>
            <div class="content">
              <div class="chat-row">Acao: atualizar publicacao da oferta no GBP.</div>
              <div class="chat-row bot">Adicionar origem QR a campanha correspondente.</div>
              <div class="chat-row">Metrica: marcações vindas da pesquisa.</div>
              <div class="chat-row bot">Rever resultado em 7 dias.</div>
            </div>
          </article>
        `,
      },
      {
        kicker: "Passo 3",
        title: "A campanha avança com atribuição preservada.",
        body:
          "A equipa lança a ação em Meta, codigos QR, CTAs do site e entrada por WhatsApp, enquanto a Ethera mantém a origem da campanha ligada ao lead.",
        visual: `
          <article class="visual-card">
            <header><span>Pipeline da campanha</span><span>Origem preservada</span></header>
            <div class="content">
              <div class="pipeline-row">
                <div><strong>Novo</strong><div class="lead-card">Lead QR<br />Oferta GBP</div></div>
                <div><strong>Contactado</strong><div class="lead-card">Anúncio Meta<br />Pedido de aula</div></div>
                <div><strong>Marcado</strong><div class="lead-card">CTA do site<br />Quinta-feira</div></div>
              </div>
            </div>
          </article>
        `,
      },
      {
        kicker: "Passo 4",
        title: "O CRM Studio mantém a conversão operacional.",
        body:
          "Entrada por WhatsApp, pipeline, marcações e operações de cliente ficam ao lado da origem de marketing, para medir cada campanha ate a conversão.",
        visual: `
          <article class="visual-card">
            <header><span>CRM Studio</span><span>Fluxo de conversão</span></header>
            <div class="content">
              <div class="metric-grid">
                <div><span>Inbox</span><strong>Live</strong></div>
                <div><span>Pipeline</span><strong>38</strong></div>
                <div><span>Marcações</span><strong>17</strong></div>
                <div><span>Renovações</span><strong>Medidas</strong></div>
              </div>
            </div>
          </article>
        `,
      },
      {
        kicker: "Passo 5",
        title: "A próxima estratégia aprende com o resultado.",
        body:
          "Ações executadas, adiadas e rejeitadas sao medidas contra leads, marcações e receita reais, para que o ciclo seguinte comece mais inteligente.",
        visual: `
          <article class="visual-card">
            <header><span>Medição de resultados</span><span>Próximo ciclo</span></header>
            <div class="content">
              <div class="metric-grid">
                <div><span>Leads</span><strong>124</strong></div>
                <div><span>Aulas teste</span><strong>38</strong></div>
                <div><span>Ganhos</span><strong>17</strong></div>
                <div><span>Próxima ação</span><strong>Pronta</strong></div>
              </div>
            </div>
          </article>
        `,
      },
    ],
  },
};

const copy = isPortuguese C demoCopy.pt : demoCopy.en;
const steps = copy.steps;

const buttons = Array.from(document.querySelectorAll(".demo-step"));
const kicker = document.getElementById("demo-kicker");
const title = document.getElementById("demo-title");
const body = document.getElementById("demo-body");
const visual = document.getElementById("demo-visual");

function renderStep(index) {
  const step = steps[index];
  buttons.forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex === index);
  });
  kicker.textContent = step.kicker;
  title.textContent = step.title;
  body.textContent = step.body;
  visual.innerHTML = step.visual;
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => renderStep(index));
});

renderStep(0);

const demoForm = document.getElementById("demo-form");

if (demoForm) {
  demoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(demoForm);
    const subject = copy.mailSubject;
    const body = [
      `${copy.fields.name}: ${data.get("name") || ""}`,
      `${copy.fields.email}: ${data.get("email") || ""}`,
      `${copy.fields.business}: ${data.get("business") || ""}`,
      `${copy.fields.businessType}: ${data.get("businessType") || ""}`,
      `${copy.fields.interest}: ${data.get("interest") || ""}`,
      "",
      copy.fields.focus,
      data.get("message") || "",
    ].join("\n");
    window.location.href = `mailto:hello@getethera.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
