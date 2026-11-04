import { createFileRoute, useHydrated } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import headshot from "@/assets/felix-headshot.png.asset.json";
import petronisPlan from "@/assets/petronis-site-plan-takeoff.jpg.asset.json";
import petronisPdf from "@/assets/petronis-site-plan-takeoff.pdf.asset.json";
import dogBoq from "@/assets/dog-house-boq-comparison.jpg.asset.json";
import dogXlsx from "@/assets/dog-house-boq-comparison.xlsx.asset.json";

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
    scripts: [
      {
        children:
          "try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark');}catch(e){}",
      },
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

const samples = [
  {
    t: "Petronis Residence — Site Plan Quantity Takeoff",
    kind: "Quantity Takeoff",
    meta: "Gaines Bend, Palo Pinto County, Texas · Sheet A-3",
    alt: "Marked-up residential site plan with quantity takeoff annotations",
    d: "Digital markup takeoff of a 28,684 SF residential lot for a custom-home builder: hardscape areas by type, the impervious/pervious split for drainage review, and total retaining wall length — issued on the architect's site plan with a review block for the contractor.",
    img: petronisPlan,
    file: petronisPdf,
    open: "Open marked-up site plan (PDF)",
    stats: [
      { k: "Building footprint", v: "5,640 SF" },
      { k: "Total site area", v: "28,684 SF" },
      { k: "Impervious cover", v: "31.9%" },
      { k: "Retaining wall", v: "547.9 LF" },
    ],
  },
  {
    t: "Small Dog House — BOQ & Supplier Comparison",
    kind: "Bill of Quantities",
    meta: "Honolulu, Hawaii, USA · USD",
    alt: "Bill of quantities spreadsheet comparing two suppliers",
    d: "Fourteen-line bill of quantities with per-item waste allowances, priced side by side against two suppliers, with an editable tax rate and a written estimating basis covering assumptions, exclusions and procurement recommendations.",
    img: dogBoq,
    file: dogXlsx,
    open: "Open workbook (XLSX)",
    stats: [
      { k: "Line items", v: "14" },
      { k: "Supplier A total", v: "$490.00" },
      { k: "Supplier B total", v: "$473.58" },
      { k: "Modelled saving", v: "$16.42" },
    ],
  },
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

/* Fades content in as it scrolls into view. */
function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}

/* Dark / light mode toggle. The choice is saved and restored on reload. */
function ThemeToggle() {
  const hydrated = useHydrated();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initial: "light" | "dark" =
      stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)
        ? "dark"
        : "light";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded border px-3 py-1.5 font-mono text-xs uppercase tracking-widest transition-transform active:scale-95"
    >
      {hydrated ? (theme === "dark" ? "☀ Light" : "☾ Dark") : "☾ Dark"}
    </button>
  );
}

function Index() {
  const [progress, setProgress] = useState(0);

  /* Scroll progress bar */
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Click burst effect */
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const dot = document.createElement("span");
      dot.className = "click-burst";
      const size = 56;
      dot.style.left = `${e.clientX - size / 2}px`;
      dot.style.top = `${e.clientY - size / 2}px`;
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      document.body.appendChild(dot);
      window.setTimeout(() => dot.remove(), 600);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-xl font-black tracking-tight transition-transform active:scale-95">
            FELIX<span className="text-accent">.</span>MENCHERO
          </a>
          <nav className="hidden gap-6 font-mono text-xs uppercase tracking-widest md:flex">
            {nav.map((n) => (
              <a key={n} href={`#${n}`} className="text-muted-foreground transition-all hover:text-primary active:scale-95">
                {n}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
        <div
          className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-primary"
          style={{ transform: `scaleX(${progress})` }}
        />
      </header>

      <section id="top" className="blueprint-grid border-b">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[1fr_auto] md:py-36">
          <div>
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
            <a href="#works" className="rounded bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:opacity-90 active:scale-95">
              View my work
            </a>
            <a href="#contact" className="rounded border border-foreground px-6 py-3 font-medium transition-all hover:bg-foreground hover:text-background active:scale-95">
              Get in touch
            </a>
          </div>
          <div className="mt-16 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="rounded border bg-card px-3 py-1 font-mono text-xs">{s}</span>
            ))}
          </div>
          </div>
          <img
            src={headshot.url}
            alt="Felix Nathaniel Menchero"
            className="mx-auto w-56 rounded border-2 border-foreground/20 object-cover shadow-lg md:w-80"
          />
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <Label n="01">Services</Label>
          <h2 className="mt-3 font-display text-4xl font-black md:text-5xl">What I do</h2>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded border bg-border md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="h-full bg-card p-8 transition-all duration-300 hover:bg-secondary active:scale-[0.98]">
                <span className="font-mono text-sm text-accent">{s.n}</span>
                <h3 className="mt-4 text-2xl font-bold">{s.t}</h3>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="experience" className="border-y bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <Label n="02">Work Experience</Label>
            <h2 className="mt-3 font-display text-4xl font-black md:text-5xl">Where I've worked</h2>
          </Reveal>
          <div className="mt-12 divide-y border-y border-foreground/20">
            {jobs.map((j) => (
              <Reveal key={j.c}>
                <div className="grid gap-4 py-8 md:grid-cols-[1fr_2fr]">
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
              </Reveal>
            ))}
          </div>
          <p className="mt-8 font-mono text-sm text-muted-foreground">
            Education — BS Civil Engineering (Transportation), New Era University, 2021–2025
          </p>
        </div>
      </section>

      <section id="works" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <Label n="03">Previous Works</Label>
          <h2 className="mt-3 font-display text-4xl font-black md:text-5xl">Selected projects</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {works.map((w, i) => (
            <Reveal key={w.t} delay={i * 120}>
              <article className="blueprint-grid flex h-full flex-col rounded border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98]">
                <p className="font-mono text-xs text-muted-foreground">{w.p}</p>
                <h3 className="mt-3 text-2xl font-bold">{w.t}</h3>
                <p className="mt-4 flex-1 text-muted-foreground">{w.d}</p>
                <div className="mt-8 border-t pt-4">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Estimate value</p>
                  <p className="font-display text-4xl font-black text-primary">{w.v}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Sample works</p>
            <h3 className="mt-3 font-display text-3xl font-black md:text-4xl">Real deliverables you can open</h3>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Two work products I have actually issued — a marked-up site plan takeoff and a priced bill of
              quantities. Click either file to review it in full.
            </p>
          </Reveal>
          <div className="mt-10 space-y-8">
            {samples.map((s, i) => (
              <Reveal key={s.t} delay={i * 100}>
                <article className="overflow-hidden rounded border bg-card transition-all duration-300 hover:shadow-lg md:grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                  <a
                    href={s.file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${s.t}`}
                    className="block border-b bg-secondary/50 p-4 transition-colors hover:bg-secondary md:border-b-0 md:border-r"
                  >
                    <img
                      src={s.img.url}
                      alt={s.alt}
                      loading="lazy"
                      className="w-full rounded border bg-background object-cover"
                    />
                  </a>
                  <div className="flex h-full flex-col p-8">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{s.kind}</p>
                    <h4 className="mt-3 text-2xl font-bold leading-tight">{s.t}</h4>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">{s.meta}</p>
                    <p className="mt-4 text-muted-foreground">{s.d}</p>
                    <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded border bg-border">
                      {s.stats.map((st) => (
                        <div key={st.k} className="bg-card p-4">
                          <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                            {st.k}
                          </dt>
                          <dd className="mt-1 font-display text-xl font-black text-primary">{st.v}</dd>
                        </div>
                      ))}
                    </dl>
                    <div className="mt-auto pt-6">
                      <a
                        href={s.file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded bg-primary px-5 py-2.5 font-medium text-primary-foreground transition-all hover:opacity-90 active:scale-95"
                      >
                        {s.open}
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">04 / Testimonials</p>
            <h2 className="mt-3 font-display text-4xl font-black md:text-5xl">Kind words</h2>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.c} delay={i * 120}>
                <figure className="border-l-2 border-accent pl-6">
                  <blockquote className="text-xl leading-relaxed">“{t.q}”</blockquote>
                  <figcaption className="mt-4 font-mono text-xs uppercase tracking-widest opacity-70">
                    {t.a} — {t.c}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <Label n="05">Contact</Label>
          <h2 className="mt-3 font-display text-5xl font-black md:text-7xl">Let's build your next estimate.</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { k: "Email", v: "flxmnchr@gmail.com", h: "mailto:flxmnchr@gmail.com" },
            { k: "Phone", v: "+63 935 209 3565", h: "tel:+639352093565", note: "Also on Telegram, Viber & WhatsApp" },
            { k: "Location", v: "Lucena City, Philippines" },
          ].map((c, i) => (
            <Reveal key={c.k} delay={i * 80}>
              <div className="rounded border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:scale-[0.97]">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{c.k}</p>
                {c.h ? (
                  <a href={c.h} className="mt-2 block text-lg font-bold transition-colors hover:text-primary">{c.v}</a>
                ) : (
                  <p className="mt-2 text-lg font-bold">{c.v}</p>
                )}
                {"note" in c && c.note && (
                  <p className="mt-2 font-mono text-xs text-muted-foreground">{c.note}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl justify-between px-6 py-6 font-mono text-xs text-muted-foreground">
          <span>© 2026 Felix Nathaniel U. Menchero</span>
          <a href="#top" className="transition-colors hover:text-primary">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
