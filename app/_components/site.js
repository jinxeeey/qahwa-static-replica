import Image from "next/image";
import Link from "next/link";

export const products = [
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

export const shopProducts = [
  ...products,
  { name: "MAAMOUL GRANOLA", price: "2,030 DZD", image: "/products/casbah.svg" },
  { name: "JERSEY", price: "13,050 DZD", image: "/products/medina.svg" },
  { name: "CAP", price: "5,075 DZD", image: "/products/atlas.svg" },
  { name: "ESPRESSO CUP", price: "4,060 DZD", image: "/products/bottle.svg" },
];

const navigation = [
  ["shop", "SHOP", "/shop"],
  ["menu", "OUR MENU", "/menu"],
  ["delivery", "DELIVERY", "/delivery"],
  ["locations", "LOCATIONS", "/locations"],
  ["about", "ABOUT", "/about"],
  ["contact", "CONTACT", "/contact"],
];

function Navigation({ active, mobile = false }) {
  return (
    <nav className={mobile ? "mobile-nav" : "primary-nav"} aria-label={mobile ? "Mobile navigation" : "Primary navigation"}>
      {navigation.map(([key, label, href]) => (
        <Link className={active === key ? "active" : ""} href={href} key={key}>{label}</Link>
      ))}
    </nav>
  );
}

export function SiteHeader({ active, overlay = false }) {
  return (
    <header className={`site-header${overlay ? " overlay-header" : " interior-header"}`}>
      <div className="mobile-header">
        <details className="mobile-menu">
          <summary className="icon-button" aria-label="Open menu"><Image src="/menu.svg" alt="" width={20} height={20} /></summary>
          <div className="mobile-menu-panel">
            <Navigation active={active} mobile />
            <div className="mobile-preferences"><span>LANGUAGE</span><b>EN</b><span>FR</span><span>CURRENCY</span><b>DZD</b><span>EUR</span></div>
          </div>
        </details>
        <Link className="wordmark" href="/" aria-label="Qahwa home">QAHWA</Link>
        <button className="icon-button cart-button" type="button" aria-label="Open cart"><Image src="/bag.svg" alt="" width={20} height={20} /></button>
      </div>

      <div className="desktop-header">
        <Link className="wordmark" href="/" aria-label="Qahwa home">QAHWA</Link>
        <Navigation active={active} />
        <div className="header-tools">
          <div className="toggle" aria-label="Language"><span className="selected">EN</span><span>FR</span></div>
          <i />
          <div className="toggle" aria-label="Currency"><span className="selected">DZD</span><span>EUR</span></div>
          <i />
          <span>ACCOUNT</span><i />
          <button className="icon-button" type="button" aria-label="Open cart"><Image src="/bag.svg" alt="" width={20} height={20} /></button>
        </div>
      </div>
    </header>
  );
}

export function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-stage"><div className="product-image"><Image src={product.image} alt={`${product.name} packaging`} width={440} height={440} unoptimized /></div></div>
      <div className="product-copy"><h3>{product.name}</h3><p>{product.price}</p></div>
    </article>
  );
}

export function ProductGrid({ items = products }) {
  return <div className="product-grid">{items.map((product) => <ProductCard product={product} key={product.name} />)}</div>;
}

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="legal-row"><span>LEGAL NOTICE</span><span>SHIPPING POLICY</span><span>TERMS &amp; CONDITIONS</span><span>PRIVACY POLICY</span></div>
        <div className="social-row"><div><a href="https://instagram.com/qahwathecoffee">INSTAGRAM</a><span>TIKTOK</span></div><span>© QAHWA 2026</span></div>
      </div>
    </footer>
  );
}

export function PageHeading({ title, children }) {
  return <header className="page-heading"><h1>{title}</h1>{children ? <p>{children}</p> : null}</header>;
}
