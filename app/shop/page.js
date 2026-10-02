import { PageHeading, ProductGrid, shopProducts, SiteFooter, SiteHeader } from "../_components/site";

export const metadata = { title: "Shop | Qahwa" };

const categories = ["ALL", "COFFEE", "TEA", "DISCOVERY", "ACCESSORY", "APPAREL", "MERCH"];

export default function ShopPage() {
  return (
    <><SiteHeader active="shop" /><main className="interior-main shop-page">
      <PageHeading title="OUR COLLECTION">FROM THE HIGH ALTITUDES OF EAST AFRICA TO THE LUSH FARMS OF CENTRAL AMERICA.<br />ROASTED WITH PRECISION IN ALGIERS.</PageHeading>
      <section className="shop-controls" aria-label="Shop controls">
        <div className="category-row">{categories.map((category, index) => <span className={index === 0 ? "selected" : ""} key={category}>{category}</span>)}</div>
        <div className="shop-tools"><input aria-label="Search the shop" placeholder="⌕  Search the shop..." readOnly /><label>SORT <select aria-label="Sort" defaultValue="NEWEST"><option>NEWEST</option><option>PRICE: LOW TO HIGH</option><option>PRICE: HIGH TO LOW</option><option>NAME: A TO Z</option></select></label></div>
      </section>
      <section className="shop-products"><ProductGrid items={shopProducts} /></section>
    </main><SiteFooter /></>
  );
}
