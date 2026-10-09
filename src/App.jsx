import { useEffect, useState } from "react";
import "./App.css";

const services = [
  ["01", "Web Engineering", "Fast, responsive websites and web applications designed around your business goals and built to grow with your audience."],
  ["02", "SaaS Products", "From the first prototype to launch, we turn complex ideas into dependable, scalable software products."],
  ["03", "Product Design", "Intuitive user journeys and polished interfaces that make digital products easier to use and more enjoyable."],
  ["04", "AI & Automation", "Practical AI integrations and workflow automation that reduce repetitive tasks and give your team more time to focus."],
  ["05", "24/7 Customer Support", "We're here around the clock to help with questions, troubleshoot issues, and keep your digital experience moving forward."],
  ["06", "Maintenance & Optimization", "Ongoing updates, bug fixes, performance improvements, and security-conscious maintenance to help your product stay reliable."],
];

const projects = [
  { tag: "SaaS / 2026", title: "AquaFlow Systems", text: "A modern operating system for water companies to manage customers, sales, stock and profit.", metric: "42% faster operations" },
  { tag: "Food Tech / 2026", title: "YummGo", text: "A fast, mobile-first ordering experience connecting customers with local food businesses.", metric: "2.4× checkout conversion" },
  { tag: "Commerce / 2026", title: "PizzaMax", text: "A high-converting food ordering platform with real-time cart and checkout flows.", metric: "68% mobile traffic" },
];

const highlights = [
  { title: "Product strategy", text: "Clear priorities, product thinking and digital roadmaps built for growth." },
  { title: "Fast execution", text: "Lean delivery cycles with design and engineering moving in sync." },
  { title: "Launch support", text: "Hands-on guidance from the first concept through post-launch refinement." },
];

function Arrow() {
  return <span className="arrow">↗</span>;
}

function App() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("All");

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  return (
    <div className="site">
      <div className="noise" />
      <header className="nav">
        <div className="nav-inner">
          <button className="brand" onClick={() => scrollTo("home")}>
            <span className="brand-mark">N</span>
            <span>WEBNOX<span className="brand-dot">.</span></span>
          </button>

          <nav className={menu ? "nav-links open" : "nav-links"}>
            {["services", "work", "about", "process"].map(x => (
              <button key={x} onClick={() => scrollTo(x)}>{x[0].toUpperCase() + x.slice(1)}</button>
            ))}
            <button className="nav-contact" onClick={() => scrollTo("contact")}>Start a project <Arrow /></button>
          </nav>

          <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu">
            <span /><span />
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" />
          <div className="hero-orb orb-a" />
          <div className="hero-orb orb-b" />
          <div className="hero-content">
            <div className="eyebrow reveal"><span className="pulse" /> Independent digital product studio · Lahore / Remote</div>
            <h1 className="reveal delay-1">We build digital<br /><em>products</em> that matter.</h1>
            <p className="hero-copy reveal delay-2">
              Webnox partners with ambitious teams to design, engineer and launch software people actually want to use.
            </p>
            <div className="hero-actions reveal delay-3">
              <button className="btn btn-primary" onClick={() => scrollTo("contact")}>Start a project <Arrow /></button>
              <button className="text-btn" onClick={() => scrollTo("work")}>Explore our work <span>↓</span></button>
            </div>
          </div>
          <div className="hero-bottom reveal delay-3">
            <span>Scroll to explore</span>
            <div className="scroll-line" />
            <span>01 — 06</span>
          </div>
        </section>

        <section className="ticker">
          <div className="ticker-track">
            {["Web Apps", "SaaS", "AI & Automation", "Product Design", "Mobile", "Cloud", "Web Apps", "SaaS"].map((x, i) =>
              <span key={i}>{x} <b>✦</b></span>
            )}
          </div>
        </section>

        <section className="impact-band reveal">
          <div className="impact-grid">
            <div className="impact-metrics">
              <div><strong>24+</strong><span>launches</span></div>
              <div><strong>8</strong><span>industries</span></div>
              <div><strong>4.9/5</strong><span>ratings</span></div>
              <div><strong>24/7</strong><span>support</span></div>
            </div>

            <div className="impact-list">
              {highlights.map(({ title, text }, index) => (
                <article key={title} className="highlight-card">
                  <span className="mini-badge">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="section-head reveal">
            <span className="section-kicker">01 / Capabilities</span>
            <h2>Small team.<br /><span>Serious output.</span></h2>
            <p>More than just development. We build reliable digital experiences, support you after launch, and help your business keep moving forward.</p>
          </div>
          <div className="service-list">
            {services.map(([num, title, text]) => (
              <article className="service-card reveal" key={num}>
                <span className="service-num">{num}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <Arrow />
              </article>
            ))}
          </div>
        </section>

        <section className="section work" id="work">
          <div className="section-head work-head reveal">
            <span className="section-kicker">02 / Selected work</span>
            <h2>Built for the<br /><span>real world.</span></h2>
            <div className="filters">
              {["All", "SaaS", "Commerce"].map(x => <button className={active === x ? "active" : ""} onClick={() => setActive(x)} key={x}>{x}</button>)}
            </div>
          </div>
          <div className="projects">
            {projects.filter(p => active === "All" || p.tag.startsWith(active)).map((p, i) => (
              <article className={`project project-${i + 1} reveal`} key={p.title}>
                <div className="project-visual">
                  <div className="mock-window">
                    <div className="mock-top"><i/><i/><i/><span>{p.title.toLowerCase().replaceAll(" ", "")}.com</span></div>
                    <div className="mock-content">
                      <div className="mock-sidebar" />
                      <div className="mock-main"><b>{i === 0 ? "Business overview" : i === 1 ? "Good food. Delivered." : "Build your perfect order."}</b><div className="mock-bars"><i/><i/><i/></div></div>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <div><small>{p.tag}</small><h3>{p.title}</h3><p>{p.text}</p></div>
                  <div className="project-meta"><span>{p.metric}</span><Arrow /></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="marquee-statement reveal">
          <p>Good software is invisible.</p>
          <strong>Great software <em>feels inevitable.</em></strong>
        </section>

        <section className="section about" id="about">
          <div className="about-number">03</div>
          <div className="about-copy reveal">
            <span className="section-kicker">03 / About Webnox</span>
            <h2>We don't just ship screens.<br /><span>We solve problems.</span></h2>
            <p>We're a focused software studio for founders and growing companies that need a senior team without the agency bloat.</p>
            <p>Our work sits at the intersection of business strategy, thoughtful design and robust engineering. Every decision has a reason.</p>
            <button className="line-btn" onClick={() => scrollTo("contact")}>Tell us what you're building <Arrow /></button>
          </div>
          <div className="stats reveal">
            <div><b>24+</b><span>Products shipped</span></div>
            <div><b>8</b><span>Industries served</span></div>
            <div><b>4.9/5</b><span>Average client rating</span></div>
            <div><b>100%</b><span>Remote-ready team</span></div>
          </div>
        </section>

        <section className="section process" id="process">
          <div className="section-head reveal">
            <span className="section-kicker">04 / How we work</span>
            <h2>From messy idea<br /><span>to clear product.</span></h2>
          </div>
          <div className="process-grid">
            {[
              ["01", "Discover", "We understand your users, business model and the problem worth solving."],
              ["02", "Define", "We turn uncertainty into a focused roadmap, architecture and product direction."],
              ["03", "Build", "Design and engineering move together in short, transparent iterations."],
              ["04", "Launch", "We ship, measure and improve — because launch day is only the beginning."]
            ].map(([n,t,d]) => <div className="process-item reveal" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </section>

        <section className="section team" id="team">
          <div className="section-head reveal">
            <span className="section-kicker">05 / The people behind it</span>
            <h2>A small team.<br /><span>Big ambition.</span></h2>
            <p>Meet the people building thoughtful digital products with a focus on quality, collaboration, and long-term value.</p>
          </div>
          <div className="team-grid">
            <article className="team-card reveal">
              <div className="team-avatar">UI</div>
              <h3>Usman Irfan</h3>
              <p>Full Stack Developer</p>
              <a href="https://www.linkedin.com/in/usman-irfan-b72162437/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            </article>
            <article className="team-card reveal">
              <div className="team-avatar">AS</div>
              <h3>Asad Sulehri</h3>
              <p>Co-Founder</p>
              <a href="https://www.linkedin.com/in/asad-sulehri-207462202/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            </article>
            <article className="team-card reveal">
              <div className="team-avatar">FA</div>
              <h3>Fahad Aziz</h3>
              <p>Founder</p>
              <a href="https://www.linkedin.com/in/fahad-aziz-1212132b5/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            </article>
          </div>
        </section>

        <section className="quote-section reveal">
          <div className="quote-mark">“</div>
          <blockquote>They took a complicated business idea and turned it into a product our customers understood immediately.</blockquote>
          <div className="quote-person"><span className="avatar">AR</span><div><b>Ali Raza</b><small>Founder, Flowbase</small></div></div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-glow" />
          <div className="contact-inner reveal">
            <span className="section-kicker">05 / Start something</span>
            <h2>Have a product<br />in <em>mind?</em></h2>
            <p>Tell us what you're building. Our team is available for support and project enquiries around the clock.</p>
            <a className="contact-email" href="mailto:support.webnox@gmail.com">support.webnox@gmail.com <Arrow /></a>
            <div className="contact-links"><a href="https://www.linkedin.com/in/usman-irfan-b72162437/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/usman2182000-oss" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.instagram.com/webnox.in/" target="_blank" rel="noreferrer">Instagram</a><a href="https://wa.me/" target="_blank" rel="noreferrer">WhatsApp</a></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div><button className="brand" onClick={() => scrollTo("home")}><span className="brand-mark">N</span><span>WEBNOX<span className="brand-dot">.</span></span></button><p>Digital products for ambitious businesses.</p></div>
        <div className="footer-right"><span>© 2026 Webnox Studio</span><button onClick={() => scrollTo("home")}>Back to top ↑</button></div>
      </footer>
    </div>
  );
}

export default App;
