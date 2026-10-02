import Image from "next/image";
import { ProductGrid, SiteFooter, SiteHeader } from "./_components/site";

const heroImages = [
  ["/images/hero-cup.png", "Coffee cup detail"],
  ["/images/hero-paper.png", "Qahwa packaging detail"],
  ["/images/hero-drink.png", "Qahwa iced drink"],
  ["/images/hero-ice.png", "Coffee and ice detail"],
];

function Hero() {
  return (
    <section className="hero" id="top" aria-label="Qahwa coffee">
      {heroImages.map(([src, alt], index) => (
        <div className={`hero-layer hero-layer-${index + 1}`} key={src}>
          <Image src={src} alt={alt} fill sizes="100vw" priority={index === 0} />
        </div>
      ))}
      <div className="hero-shade" /><div className="hero-grain" />
      <span className="scroll-label">scroll down</span>
    </section>
  );
}

function Locations() {
  return (
    <section className="locations section-shell" id="locations">
      <h2>LOCATIONS</h2>
      <div className="location-grid">
        <article className="location-card">
          <div className="location-image"><Image src="/images/shop-algiers.png" alt="Qahwa shop in Hydra, Algiers" fill sizes="(max-width: 767px) 80vw, 25vw" /></div>
          <h3>SHOP 1 - ALGIERS</h3><p className="location-accent">Rue Mohamed BAG</p><p className="muted">Hydra 16000, Algiers</p><p>Mon - Fri: 8:00 AM - 8:00 PM</p><p>Sat - Sun: 9:00 AM - 9:00 PM</p>
        </article>
        <article className="location-card">
          <div className="location-image coming-soon"><span>Coming Soon</span></div>
          <h3>SHOP 2 - ALGIERS</h3><p className="location-accent italic">Opening November 2026</p><p className="muted">Coming Soon</p><p>Opening Soon</p><p>Opening Soon</p>
        </article>
      </div>
    </section>
  );
}

export default function Home() {
  return <><SiteHeader overlay /><main><Hero /><section className="products section-shell" id="latest"><h2>LATEST ARRIVALS</h2><ProductGrid /></section><Locations /></main><SiteFooter /></>;
}
