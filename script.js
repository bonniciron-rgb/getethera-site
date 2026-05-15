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
          "A Lisbon service business sees strong WhatsApp interest, weak local search conversion and uneven follow-up across campaigns.",
        visual: `
          <article class="visual-card demo-insight-card">
            <header><span>Lead Gen + Marketing Studio</span><span>Signal review</span></header>
            <div class="content">
              <div class="metric-grid">
                <div><span>WhatsApp leads</span><strong>124</strong></div>
                <div><span>QR scans</span><strong>72</strong></div>
                <div><span>GBP actions</span><strong>31</strong></div>
                <div><span>Booked trials</span><strong>18</strong></div>
              </div>
              <div class="ad-creative">
                <strong>Good demand. Slow conversion from search.</strong>
                <span class="pill">Needs one focused growth play</span>
              </div>
            </div>
          </article>
        `,
      },
      {
        kicker: "Step 2",
        title: "Strategy Studio creates the next play.",
        body:
          "Strategy Studio turns the signal into a clear weekly action with owner, channel, script and success metric.",
        visual: `
          <article class="visual-card">
            <header><span>Strategy Studio</span><span>Weekly play</span></header>
            <div class="content">
              <div class="chat-row">Play: refresh Google Business Profile offer post.</div>
              <div class="chat-row bot">Add matching QR source tag to the campaign.</div>
              <div class="chat-row">Owner: sales lead. Metric: booked trials from search.</div>
              <div class="chat-row bot">Review leads, bookings and revenue in 7 days.</div>
            </div>
          </article>
        `,
      },
      {
        kicker: "Step 3",
        title: "The campaign runs with attribution intact.",
        body:
          "The team launches across QR flyers, Instagram, website CTAs and WhatsApp intake while Ethera keeps source attached.",
        visual: `
          <article class="visual-card">
            <header><span>Campaign pipeline</span><span>Source preserved</span></header>
            <div class="content">
              <div class="pipeline-row">
                <div><strong>New</strong><div class="lead-card">QR flyer<br />Summer trial</div></div>
                <div><strong>Contacted</strong><div class="lead-card">Instagram ad<br />Pricing ask</div></div>
                <div><strong>Booked</strong><div class="lead-card">Website CTA<br />Thursday 18:30</div></div>
              </div>
            </div>
          </article>
        `,
      },
      {
        kicker: "Step 4",
        title: "SEO and CRM work as one loop.",
        body:
          "Profile actions, reviews, posts, WhatsApp intake, bookings and handoffs sit beside the same customer record.",
        visual: `
          <article class="visual-card">
            <header><span>SEO + CRM</span><span>Operational loop</span></header>
            <div class="content">
              <div class="chat-row">GBP post published: Summer English Trial.</div>
              <div class="chat-row bot">WhatsApp bot asks course, level and preferred time.</div>
              <div class="chat-row">Team handoff: qualified trial lead.</div>
              <div class="chat-row bot">Booking and source saved to customer timeline.</div>
            </div>
          </article>
        `,
      },
      {
        kicker: "Step 5",
        title: "The next strategy learns from the outcome.",
        body:
          "Executed, deferred and rejected plays are measured against leads, bookings and revenue so the next cycle starts smarter.",
        visual: `
          <article class="visual-card">
            <header><span>Outcome measurement</span><span>Next cycle</span></header>
            <div class="content">
              <div class="metric-grid">
                <div><span>Leads</span><strong>124</strong></div>
                <div><span>Trials</span><strong>38</strong></div>
                <div><span>Won</span><strong>17</strong></div>
                <div><span>Revenue source</span><strong>Clear</strong></div>
              </div>
              <div class="chat-row bot">Next play ready: add bot intake to QR flyer journey.</div>
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
          "Um negócio de serviços em Lisboa vê forte interesse no WhatsApp, baixa conversão da pesquisa local e follow-up irregular entre campanhas.",
        visual: `
          <article class="visual-card demo-insight-card">
            <header><span>Lead Gen + Marketing Studio</span><span>Análise de sinais</span></header>
            <div class="content">
              <div class="metric-grid">
                <div><span>Leads WhatsApp</span><strong>124</strong></div>
                <div><span>Scans QR</span><strong>72</strong></div>
                <div><span>Ações GBP</span><strong>31</strong></div>
                <div><span>Aulas marcadas</span><strong>18</strong></div>
              </div>
              <div class="ad-creative">
                <strong>Boa procura. Conversão lenta vinda da pesquisa.</strong>
                <span class="pill">Precisa de uma ação de crescimento focada</span>
              </div>
            </div>
          </article>
        `,
      },
      {
        kicker: "Passo 2",
        title: "O Strategy Studio cria a próxima ação.",
        body:
          "O Strategy Studio transforma o sinal numa ação semanal clara, com responsável, canal, script e métrica de sucesso.",
        visual: `
          <article class="visual-card">
            <header><span>Strategy Studio</span><span>Ação semanal</span></header>
            <div class="content">
              <div class="chat-row">Ação: atualizar publicação da oferta no Google Business Profile.</div>
              <div class="chat-row bot">Adicionar origem QR à campanha correspondente.</div>
              <div class="chat-row">Responsável: equipa comercial. Métrica: aulas marcadas pela pesquisa.</div>
              <div class="chat-row bot">Rever leads, marcações e receita em 7 dias.</div>
            </div>
          </article>
        `,
      },
      {
        kicker: "Passo 3",
        title: "A campanha avança com atribuição preservada.",
        body:
          "A equipa lança flyers QR, Instagram, CTAs do site e entrada por WhatsApp enquanto a Ethera mantém a origem ligada ao lead.",
        visual: `
          <article class="visual-card">
            <header><span>Pipeline da campanha</span><span>Origem preservada</span></header>
            <div class="content">
              <div class="pipeline-row">
                <div><strong>Novo</strong><div class="lead-card">Flyer QR<br />Aula verão</div></div>
                <div><strong>Contactado</strong><div class="lead-card">Anúncio Instagram<br />Pedido de preço</div></div>
                <div><strong>Marcado</strong><div class="lead-card">CTA do site<br />Quinta 18:30</div></div>
              </div>
            </div>
          </article>
        `,
      },
      {
        kicker: "Passo 4",
        title: "SEO e CRM trabalham no mesmo ciclo.",
        body:
          "Ações no perfil, reviews, publicações, entrada WhatsApp, marcações e handoffs ficam ligados ao mesmo cliente.",
        visual: `
          <article class="visual-card">
            <header><span>SEO + CRM</span><span>Ciclo operacional</span></header>
            <div class="content">
              <div class="chat-row">Publicação GBP: Aula Experimental de Inglês.</div>
              <div class="chat-row bot">Bot WhatsApp pergunta curso, nível e horário preferido.</div>
              <div class="chat-row">Handoff: lead qualificado para aula experimental.</div>
              <div class="chat-row bot">Marcação e origem guardadas no histórico do cliente.</div>
            </div>
          </article>
        `,
      },
      {
        kicker: "Passo 5",
        title: "A próxima estratégia aprende com o resultado.",
        body:
          "Ações executadas, adiadas e rejeitadas são medidas contra leads, marcações e receita para que o ciclo seguinte comece melhor.",
        visual: `
          <article class="visual-card">
            <header><span>Medição de resultados</span><span>Próximo ciclo</span></header>
            <div class="content">
              <div class="metric-grid">
                <div><span>Leads</span><strong>124</strong></div>
                <div><span>Aulas teste</span><strong>38</strong></div>
                <div><span>Ganhos</span><strong>17</strong></div>
                <div><span>Origem receita</span><strong>Clara</strong></div>
              </div>
              <div class="chat-row bot">Próxima ação pronta: adicionar bot ao percurso do flyer QR.</div>
            </div>
          </article>
        `,
      },
    ],
  },
};

const copy = isPortuguese ? demoCopy.pt : demoCopy.en;
const steps = copy.steps;

const buttons = Array.from(document.querySelectorAll(".demo-step"));
const kicker = document.getElementById("demo-kicker");
const title = document.getElementById("demo-title");
const body = document.getElementById("demo-body");
const visual = document.getElementById("demo-visual");

function renderStep(index) {
  if (!kicker || !title || !body || !visual) return;
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
    const emailBody = [
      `${copy.fields.name}: ${data.get("name") || ""}`,
      `${copy.fields.email}: ${data.get("email") || ""}`,
      `${copy.fields.business}: ${data.get("business") || ""}`,
      `${copy.fields.businessType}: ${data.get("businessType") || ""}`,
      `${copy.fields.interest}: ${data.get("interest") || ""}`,
      "",
      copy.fields.focus,
      data.get("message") || "",
    ].join("\n");
    window.location.href = `mailto:hello@getethera.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
  });
}
