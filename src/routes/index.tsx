import { createFileRoute } from "@tanstack/react-router";

const title = "Felix Menchero — Estimator & Quantity Surveyor";
const desc =
  "Portfolio of Felix Nathaniel Menchero, civil engineer specializing in cost estimation and quantity takeoff.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = ["services", "experience", "works", "testimonials", "contact"];

const services = [
  { n: "01", t: "Cost Estimation", d: "Competitive cost proposals with labor, materials, consumables and contingencies." },
  { n: "02", t: "Quantity Takeoff", d: "Accurate takeoffs from plans and specifications using Bluebeam, Planswift and AutoCAD." },
  { n: "03", t: "Unit Price Analysis", d: "Detailed unit pricing and budget control for awarded and ongoing projects." },
  { n: "04", t: "Variation Orders", d: "Fast, accurate costing for change orders to keep projects moving." },
];

const jobs = [
  { r: "Estimator", c: "CT-Bond", p: "Jan 2026 — Jul 2026", l: "Santa Rosa, Laguna", b: ["Developed competitive cost proposals, improving bidding success by streamlining estimation.", "Conducted unit price analysis and budget control for awarded and ongoing projects.", "Created accurate costing for variation orders."] },
  { r: "Quantity Surveyor (Intern)", c: "Matter Construction Corporation", p: "Jul 2025 — Aug 2025", l: "Quezon City", b: ["Provided material estimates for construction components per specifications.", "Produced AutoCAD blow-up plans for on-site implementation."] },
  { r: "Labeller / Annotator", c: "XFINITE", p: "Jan 2023 — Jan 2025", l: "Remote", b: ["Annotated failed AI captures for review and retraining.", "Streamlined project workflows, boosting efficiency by 25%."] },
];

const works = [
  { t: "Uptown Modern Facial Mirror & Shower Enclosure", p: "Jan 2026 — Ongoing", v: "$572,803.30", d: "Comprehensive estimate covering labor, materials and contingencies. Takeoffs via Bluebeam, Planswift and AutoCAD with the Design & Construction Manager." },
  { t: "Mandaluyong Steel Railing", p: "Mar 2026 — May 2026", v: "$252,033.45", d: "Estimate covering labor, materials and consumables, with takeoffs verified against design intent." },
];

const testimonials = [
  { q: "Felix's estimates are thorough and consistently on point. He made our bid submissions faster and more reliable.", a: "Project Manager", c: "CT-Bond" },
  { q: "A quick learner with a sharp eye for detail. His AutoCAD blow-up plans helped our site team a lot.", a: "Senior Quantity Surveyor", c: "Matter Construction Corp." },
];

const skills = ["Estimation", "Quantity Takeoff", "Bluebeam Revu", "Planswift", "AutoCAD", "MS Excel", "Word", "PowerPoint"];

function Label({ n, children }: { n: string; children: string }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
      {n} / {children}
    </p>
  );
}

function Index() {
  return (
    <div className="min-h-screen font-sans">
      <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-xl font-black tracking-tight">
            FELIX<span className="text-accent">.</span>MENCHERO
          </a>
          <nav className="hidden gap-6 font-mono text-xs uppercase tracking-widest md:flex">
            {nav.map((n) => (
              <a key={n} href={`#${n}`} className="text-muted-foreground transition-colors hover:text-primary">
                {n}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="top" className="blueprint-grid border-b">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Civil Engineer · Lucena City, PH
          </p>
          <h1 className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight md:text-8xl">
            Precise numbers.
            <br />
            <span className="text-primary">Winning bids.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            I'm Felix Nathaniel Menchero — an estimator and quantity surveyor turning plans and specifications into
            accurate, competitive cost proposals.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#works" className="rounded bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90">
              View my work
            </a>
            <a href="#contact" className="rounded border border-foreground px-6 py-3 font-medium hover:bg-foreground hover:text-background">
              Get in touch
            </a>
          </div>
          <div className="mt-16 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="rounded border bg-card px-3 py-1 font-mono text-xs">{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <Label n="01">Services</Label>
        <h2 className="mt-3 font-display text-4xl font-black md:text-5xl">What I do</h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded border bg-border md:grid-cols-2">
          {services.map((s) => (
            <div key={s.n} className="bg-card p-8 transition-colors hover:bg-secondary">
              <span className="font-mono text-sm text-accent">{s.n}</span>
              <h3 className="mt-4 text-2xl font-bold">{s.t}</h3>
              <p className="mt-2 text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="border-y bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Label n="02">Work Experience</Label>
          <h2 className="mt-3 font-display text-4xl font-black md:text-5xl">Where I've worked</h2>
          <div className="mt-12 divide-y border-y border-foreground/20">
            {jobs.map((j) => (
              <div key={j.c} className="grid gap-4 py-8 md:grid-cols-[1fr_2fr]">
                <div>
                  <p className="font-mono text-xs text-muted-foreground">{j.p}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{j.l}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{j.r}</h3>
                  <p className="text-primary">{j.c}</p>
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    {j.b.map((b) => (
                      <li key={b} className="flex gap-3"><span className="text-accent">▪</span>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 font-mono text-sm text-muted-foreground">
            Education — BS Civil Engineering (Transportation), New Era University, 2021–2025
          </p>
        </div>
      </section>

      <section id="works" className="mx-auto max-w-6xl px-6 py-24">
        <Label n="03">Previous Works</Label>
        <h2 className="mt-3 font-display text-4xl font-black md:text-5xl">Selected projects</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {works.map((w) => (
            <article key={w.t} className="blueprint-grid flex flex-col rounded border bg-card p-8">
              <p className="font-mono text-xs text-muted-foreground">{w.p}</p>
              <h3 className="mt-3 text-2xl font-bold">{w.t}</h3>
              <p className="mt-4 flex-1 text-muted-foreground">{w.d}</p>
              <div className="mt-8 border-t pt-4">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Estimate value</p>
                <p className="font-display text-4xl font-black text-primary">{w.v}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="testimonials" className="bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">04 / Testimonials</p>
          <h2 className="mt-3 font-display text-4xl font-black md:text-5xl">Kind words</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.c} className="border-l-2 border-accent pl-6">
                <blockquote className="text-xl leading-relaxed">“{t.q}”</blockquote>
                <figcaption className="mt-4 font-mono text-xs uppercase tracking-widest opacity-70">
                  {t.a} — {t.c}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <Label n="05">Contact</Label>
        <h2 className="mt-3 font-display text-5xl font-black md:text-7xl">Let's build your next estimate.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { k: "Email", v: "flxmnchr@gmail.com", h: "mailto:flxmnchr@gmail.com" },
            { k: "Phone", v: "+63 935 209 3565", h: "tel:+639352093565" },
            { k: "Location", v: "Lucena City, Philippines" },
          ].map((c) => (
            <div key={c.k} className="rounded border bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{c.k}</p>
              {c.h ? (
                <a href={c.h} className="mt-2 block text-lg font-bold hover:text-primary">{c.v}</a>
              ) : (
                <p className="mt-2 text-lg font-bold">{c.v}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl justify-between px-6 py-6 font-mono text-xs text-muted-foreground">
          <span>© 2026 Felix Nathaniel U. Menchero</span>
          <a href="#top" className="hover:text-primary">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
