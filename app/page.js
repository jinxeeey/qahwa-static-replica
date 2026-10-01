import Image from "next/image";

const products = [
  { name: "CASBAH", price: "2,900 DZD", image: "/products/casbah.svg" },
  { name: "SIROCCO", price: "3,190 DZD", image: "/products/sirocco.svg" },
  { name: "MÉDINA", price: "3,480 DZD", image: "/products/medina.svg" },
  { name: "TASSILI", price: "2,900 DZD", image: "/products/tassili.svg" },
  { name: "ATLAS", price: "3,190 DZD", image: "/products/atlas.svg" },
  { name: "SOUK BOX", price: "13,050 DZD", image: "/products/souk.svg" },
  { name: "MENTHE", price: "2,610 DZD", image: "/products/menthe.svg" },
  { name: "KARKADEH", price: "2,900 DZD", image: "/products/karkadeh.svg" },
  { name: "BOTTLE", price: "5,075 DZD", image: "/products/bottle.svg" },
];

const heroImages = [
  ["/images/hero-cup.png", "Coffee cup detail"],
  ["/images/hero-paper.png", "Qahwa packaging detail"],
  ["/images/hero-drink.png", "Qahwa iced drink"],
  ["/images/hero-ice.png", "Coffee and ice detail"],
];

function Header() {
  return (
    <header className="site-header">
      <div className="mobile-header">
        <button className="icon-button" type="button" aria-label="Open menu">
          <Image src="/menu.svg" alt="" width={20} height={20} />
        </button>
        <a className="wordmark" href="#top" aria-label="Qahwa home">QAHWA</a>
        <button className="icon-button cart-button" type="button" aria-label="Open cart">
          <Image src="/bag.svg" alt="" width={20} height={20} />
        </button>
      </div>

      <div className="desktop-header">
        <a className="wordmark" href="#top" aria-label="Qahwa home">QAHWA</a>
        <nav aria-label="Primary navigation">
          <a href="#latest">SHOP</a>
          <a href="#latest">OUR MENU</a>
          <a href="#footer">DELIVERY</a>
          <a href="#locations">LOCATIONS</a>
          <a href="#footer">ABOUT</a>
          <a href="#footer">CONTACT</a>
        </nav>
        <div className="header-tools">
          <div className="toggle" aria-label="Language">
            <span className="selected">EN</span><span>FR</span>
          </div>
          <i />
          <div className="toggle" aria-label="Currency">
            <span className="selected">DZD</span><span>EUR</span>
          </div>
          <i />
          <span>ACCOUNT</span>
          <i />
          <button className="icon-button" type="button" aria-label="Open cart">
            <Image src="/bag.svg" alt="" width={20} height={20} />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-label="Qahwa coffee">
      {heroImages.map(([src, alt], index) => (
        <div className={`hero-layer hero-layer-${index + 1}`} key={src}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            priority={index === 0}
          />
        </div>
      ))}
      <div className="hero-shade" />
      <div className="hero-grain" />
      <span className="scroll-label">scroll down</span>
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-stage">
        <div className="product-image">
          <Image
            src={product.image}
            alt={`${product.name} coffee packaging`}
            width={440}
            height={440}
            unoptimized
          />
        </div>
      </div>
      <div className="product-copy">
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    </article>
  );
}

function Locations() {
  return (
    <section className="locations section-shell" id="locations">
      <h2>LOCATIONS</h2>
      <div className="location-grid">
        <article className="location-card">
          <div className="location-image">
            <Image
              src="/images/shop-algiers.png"
              alt="Qahwa shop in Hydra, Algiers"
              fill
              sizes="(max-width: 767px) 80vw, 25vw"
            />
          </div>
          <h3>SHOP 1 - ALGIERS</h3>
          <p className="location-accent">Rue Mohamed BAG</p>
          <p className="muted">Hydra 16000, Algiers</p>
          <p>Mon - Fri: 8:00 AM - 8:00 PM</p>
          <p>Sat - Sun: 9:00 AM - 9:00 PM</p>
        </article>

        <article className="location-card">
          <div className="location-image coming-soon">
            <span>Coming Soon</span>
          </div>
          <h3>SHOP 2 - ALGIERS</h3>
          <p className="location-accent italic">Opening November 2026</p>
          <p className="muted">Coming Soon</p>
          <p>Opening Soon</p>
          <p>Opening Soon</p>
        </article>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="products section-shell" id="latest">
          <h2>LATEST ARRIVALS</h2>
          <div className="product-grid">
            {products.map((product) => <ProductCard product={product} key={product.name} />)}
          </div>
        </section>
        <Locations />
      </main>
      <footer id="footer">
        <div className="footer-inner">
          <div className="legal-row">
            <span>LEGAL NOTICE</span>
            <span>SHIPPING POLICY</span>
            <span>TERMS &amp; CONDITIONS</span>
            <span>PRIVACY POLICY</span>
          </div>
          <div className="social-row">
            <div><span>INSTAGRAM</span><span>TIKTOK</span></div>
            <span>© QAHWA 2026</span>
          </div>
        </div>
      </footer>
    </>
  );
}
