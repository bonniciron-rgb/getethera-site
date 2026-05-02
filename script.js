const steps = [
  {
    kicker: "Step 1",
    title: "A local campaign starts the conversation.",
    body:
      "A Lisbon language school runs a Click-to-WhatsApp campaign for free trial classes. Ethera keeps the source tag attached from the first message.",
    visual: `
      <article class="visual-card">
        <header><span>Instagram campaign</span><span>Lisbon + Setubal</span></header>
        <div class="content">
          <div class="ad-creative">
            <strong>Book a free English trial class this week.</strong>
            <span class="pill">Send WhatsApp message</span>
          </div>
        </div>
      </article>
    `,
  },
  {
    kicker: "Step 2",
    title: "WhatsApp intake captures the lead cleanly.",
    body:
      "The bot asks the right questions, detects language, stores consent, and alerts the sales team while the conversation remains visible in the inbox.",
    visual: `
      <article class="visual-card">
        <header><span>WhatsApp inbox</span><span>24h window open</span></header>
        <div class="content">
          <div class="chat-row">EN: Hi, I saw your trial class offer.</div>
          <div class="chat-row bot">PT: Perfeito. E para adulto, jovem ou crianca?</div>
          <div class="chat-row">EN: Adult conversation classes.</div>
          <div class="chat-row bot">EN: Thanks. Our team will confirm available times.</div>
        </div>
      </article>
    `,
  },
  {
    kicker: "Step 3",
    title: "The lead lands in the CRM with attribution.",
    body:
      "Sales can filter by campaign, assign the lead, add notes, and move the opportunity through a clear conversion pipeline.",
    visual: `
      <article class="visual-card">
        <header><span>Pipeline</span><span>Source: instagram-trial-lisbon</span></header>
        <div class="content">
          <div class="pipeline-row">
            <div><strong>New</strong><div class="lead-card">Maria Santos<br />Adult conversation</div></div>
            <div><strong>Contacted</strong><div class="lead-card">Joao Ferreira<br />Teen programme</div></div>
            <div><strong>Booked</strong><div class="lead-card">Ana Costa<br />Trial Thursday</div></div>
          </div>
        </div>
      </article>
    `,
  },
  {
    kicker: "Step 4",
    title: "The team books the trial and keeps the handover tidy.",
    body:
      "Bookings, classes, capacity, and teacher assignment sit beside the CRM, so conversion does not depend on scattered spreadsheets.",
    visual: `
      <article class="visual-card">
        <header><span>Booking</span><span>Trial confirmed</span></header>
        <div class="content">
          <div class="metric-grid">
            <div><span>Class</span><strong>B1 English</strong></div>
            <div><span>Teacher</span><strong>Sofia</strong></div>
            <div><span>Capacity</span><strong>7 / 10</strong></div>
            <div><span>Reminder</span><strong>Sent</strong></div>
          </div>
        </div>
      </article>
    `,
  },
  {
    kicker: "Step 5",
    title: "Revenue, renewals, and campaign ROI become visible.",
    body:
      "Ethera connects contracts, invoices, renewals, and dashboards so the owner can see which campaigns created real customers.",
    visual: `
      <article class="visual-card">
        <header><span>Growth dashboard</span><span>This month</span></header>
        <div class="content">
          <div class="metric-grid">
            <div><span>Leads</span><strong>124</strong></div>
            <div><span>Trials</span><strong>38</strong></div>
            <div><span>Won</span><strong>17</strong></div>
            <div><span>Revenue</span><strong>EUR 8.6k</strong></div>
          </div>
        </div>
      </article>
    `,
  },
];

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
    const subject = "Ethera demo request";
    const body = [
      `Name: ${data.get("name") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Business: ${data.get("business") || ""}`,
      `Business type: ${data.get("businessType") || ""}`,
      `Main interest: ${data.get("interest") || ""}`,
      "",
      "Demo focus:",
      data.get("message") || "",
    ].join("\n");
    window.location.href = `mailto:hello@getethera.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
