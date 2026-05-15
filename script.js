const steps = [
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
