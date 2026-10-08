import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUp, ChartNoAxesCombined, Compass, Cpu, Layers3, Menu, Megaphone, PenTool, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ManaraBrand } from "@/components/manara-brand";
import lighthouse from "@/assets/manara-lighthouse.svg";

const services = [
  { icon: Compass, title: "Business Strategy", description: "See the bigger picture. Shape a clear direction, navigate change, and turn your ambitions into an actionable plan.", tags: ["Strategic planning", "Business models"] },
  { icon: Cpu, title: "Technology & AI", description: "Make technology work for you. Find the right digital solutions and explore AI with purpose, not just possibility.", tags: ["Digital transformation", "AI advisory"] },
  { icon: Megaphone, title: "Marketing & Growth", description: "Find your voice and your audience. Build a meaningful brand, reach the right people, and grow with intention.", tags: ["Brand strategy", "Growth marketing"] },
  { icon: Layers3, title: "Operations", description: "Create space for better work. Simplify your processes, strengthen your systems, and make everyday operations flow.", tags: ["Process improvement", "Operating models"] },
  { icon: ChartNoAxesCombined, title: "Finance", description: "Bring clarity to the numbers. Make informed financial decisions with thoughtful planning and practical insight.", tags: ["Financial planning", "Business analysis"] },
  { icon: PenTool, title: "Design", description: "Turn ideas into experiences. Connect your vision with considered design that feels right and works beautifully.", tags: ["Product & UX", "Brand identity"] },
];
const steps = [
  { number: "01", title: "Understand", text: "Every good partnership starts with listening. We get to know your goals, your challenges, and what moving forward looks like for you." },
  { number: "02", title: "Match", text: "The right expertise makes all the difference. We connect you with independent consultants whose experience fits your needs." },
  { number: "03", title: "Deliver", text: "From insight to action. Work directly with your consultant on clear priorities, practical solutions, and a considered path ahead." },
];
const navigation = [{ label: "Services", id: "services" }, { label: "How we work", id: "how-we-work" }, { label: "Why Manara", id: "why-manara" }];
const industries = ["Technology", "Retail & E-commerce", "Healthcare", "Financial Services", "Education", "Professional Services", "Hospitality", "Startups & SMEs"];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    document.documentElement.classList.add("motion-ready");
    return () => { observer.disconnect(); document.documentElement.classList.remove("motion-ready"); };
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container header-inner">
          <ManaraBrand />
          <nav className="desktop-nav" aria-label="Main navigation">{navigation.map((item) => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}</nav>
          <Button asChild variant="gold" className="header-cta h-10 px-5 text-xs gap-4"><a href="mailto:waleed@getmanara.online">Let’s talk <ArrowRight /></a></Button>
          <Button variant="menu" size="icon" className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{navigation.map((item) => <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>{item.label}</a>)}<a href="#contact" onClick={() => setMenuOpen(false)}>Start a conversation <ArrowRight className="inline size-4 ml-2" /></a></nav>}
      </header>

      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-heading">
          <img className="hero-image" src={lighthouse} width={1920} height={1024} alt="A lighthouse casting a warm guiding light across a midnight sea" fetchPriority="high" />
          <div className="light-beam" aria-hidden="true" />
          <div className="container hero-content">
            <p className="eyebrow">Independent minds. Shared direction.</p>
            <h1 id="hero-heading">Guidance that<br />lights the way<br /><em>forward.</em></h1>
            <p className="hero-description">The right expertise. A clearer path. Manara connects you with experienced independent consultants across every domain, so you can move forward with confidence.</p>
            <div className="hero-actions">
              <Button variant="gold" asChild><a href="mailto:waleed@getmanara.online">Start a conversation <ArrowRight /></a></Button>
              <Button variant="nightOutline" asChild><a href="#services">Explore services <ArrowDown /></a></Button>
            </div>
          </div>
          <div className="container hero-bottom"><a href="#services"><ArrowDown size={14} /> A clearer path starts here</a><span className="hero-signature">Your ambition. Our guiding light.</span></div>
        </section>

        <section id="services" className="section" aria-labelledby="services-heading">
          <div className="container">
            <div className="section-heading reveal"><div><p className="eyebrow">Our expertise</p><h2 id="services-heading">Different domains.<br />One guiding principle.</h2></div><p>Whatever your next challenge, we bring the right perspective. Thoughtful expertise, tailored to where you want to go.</p></div>
            <div className="services-grid">{services.map(({ icon: Icon, title, description: copy, tags }) => <article className="service-card reveal" key={title}><div className="service-icon"><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{copy}</p><div className="card-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div>
          </div>
        </section>

        <section id="how-we-work" className="section process-section" aria-labelledby="process-heading">
          <div className="container"><div className="section-heading reveal"><div><p className="eyebrow">How we work</p><h2 id="process-heading">A simple path to progress.</h2></div><p>No unnecessary complexity. Just the right people, a clear purpose, and a way forward.</p></div><div className="process-grid">{steps.map((step) => <article key={step.number} className="reveal"><div className="step-top"><span className="step-number">{step.number}</span><span className="step-line" /><ArrowRight aria-hidden="true" /></div><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div>
        </section>

        <section id="why-manara" className="section why-section" aria-labelledby="why-heading">
          <div className="container why-layout"><div className="why-copy reveal"><p className="eyebrow">Why Manara</p><h2 id="why-heading">A name with meaning.<br />A purpose with depth.</h2><p>In Arabic, Manara means lighthouse. A point of clarity on the horizon. A steady light when the way ahead feels uncertain.</p><p>That’s the idea behind our collective. Independent expertise, brought together with a shared purpose: to help you see your possibilities clearly and find your own way forward.</p></div><div className="arabic-panel reveal"><p className="arabic-word" lang="ar" dir="rtl">منارة</p><p className="arabic-caption">MANARA · Arabic for “lighthouse”</p><p className="arabic-definition">Clarity. Direction. Possibility.</p></div></div>
        </section>

        <section className="section industries-section" aria-labelledby="industries-heading"><div className="container industries-layout"><div className="reveal"><p className="eyebrow">Industries we serve</p><h2 id="industries-heading">Expertise without boundaries.</h2></div><div className="industry-tags reveal">{industries.map((industry) => <span key={industry}>{industry}</span>)}</div></div></section>

        <section id="contact" className="section contact-section" aria-labelledby="contact-heading"><div className="container reveal"><p className="eyebrow">Your next chapter</p><h2 id="contact-heading">Let’s find your way forward.</h2><p>A question, a challenge, or an idea taking shape.<br />We’d love to hear what’s on your mind.</p><Button asChild variant="gold" className="h-12 px-7 gap-5 text-xs"><a href="mailto:waleed@getmanara.online">Start a conversation <ArrowRight /></a></Button><a className="contact-email" href="mailto:waleed@getmanara.online">waleed@getmanara.online</a></div></section>
      </main>
      <footer className="footer"><div className="container footer-inner"><ManaraBrand /><p>© 2026 Manara · getmanara.online</p><a href="#home" className="footer-top">Back to top <ArrowUp size={13} /></a></div></footer>
    </>
  );
}
