import { PageHeading, SiteFooter, SiteHeader } from "../_components/site";

export const metadata = { title: "Our Menu | Qahwa" };

const menu = [
  ["TEA", [["Oatly bottle", "3,000 DZD"]]],
  ["SMOOTHIES & WELLNESS SHOTS", [["Peanut espresso smoothie", "1,200 DZD"], ["Mango matcha smoothie", "1,300 DZD"], ["Blue glow", "1,000 DZD"], ["Hibiscus", "650 DZD"], ["Ginger Shot", "350 DZD"], ["Strawberry Oat", "1,300 DZD"], ["Drink Your Salad", "850 DZD"], ["Green boost", "1,000 DZD"]]],
  ["NON COFFEE", [["Milk", "300 DZD"], ["Iced Tea Peach", "750 DZD"], ["Classic Mojito", "750 DZD"], ["Ube", "950 DZD"], ["Vichy", "150 DZD"], ["Water", "100 DZD"], ["Organic Infusion", "450 DZD"], ["Chai Latte", "650 DZD"], ["Hot Chocolate", "700 DZD"]]],
  ["FRESH JUICES", [["Seasonal Juice", "700 DZD"], ["Citrus Burst", "800 DZD"], ["Qahwa Clean", "800 DZD"], ["Green Detox", "800 DZD"], ["Back To Root", "800 DZD"], ["Qahwa Glow", "800 DZD"]]],
  ["HOJICHA", [["Black Sesame Hojicha", "1,200 DZD"], ["Affogato Hojicha", "1,100 DZD"], ["Iced Tropical Hojicha", "1,200 DZD"], ["Strawberry Hojicha", "1,200 DZD"], ["Sparkling Yuzu Hojicha", "1,200 DZD"], ["Vanilla Hojicha", "950 DZD"], ["Hojicha Latte", "900 DZD"]]],
  ["HENNA NIGHT", [["Formula 2 The Moment", "3,000 DZD"], ["Formula 1 The Ritual", "2,000 DZD"]]],
  ["SODAS / ICED TEAS / FRESH JUICES", [["Strawberry Mojito", "800 DZD"], ["Beetroot Ginger Apple", "800 DZD"], ["Lemon Mint Detox", "650 DZD"], ["Lytchee soda", "700 DZD"], ["Tropical Iced Tea", "750 DZD"], ["Citrus Burst", "800 DZD"]]],
  ["BRUNCH", [["Qahwa salad", "1,500 DZD"], ["Egg and cheese croissant", "1,600 DZD"], ["Salmon cream croissant", "2,000 DZD"], ["Chicken and cheese croissant", "1,800 DZD"], ["Egg and cheese toast", "1,400 DZD"], ["Chicken cucumber toast", "1,600 DZD"], ["Salmon avocado toast", "1,800 DZD"], ["Spinach quiche", "450 DZD"]]],
  ["MATCHA", [["Creme brulee matcha", "1,100 DZD"], ["Cloud matcha", "950 DZD"], ["Sparkling Matcha Yuzu", "950 DZD"], ["Affogato Matcha", "1,200 DZD"], ["Strawberry matcha", "1,100 DZD"], ["Vanilla Matcha", "950 DZD"], ["White Chocolate Matcha", "1,200 DZD"], ["Rose Matcha", "950 DZD"], ["Dirty Matcha Latte", "1,200 DZD"], ["Matcha Latte", "900 DZD"]]],
  ["CLASSICS", [["Flat White", "650 DZD"], ["Mocha", "700 DZD"], ["DRIP (V60)", "600 DZD"], ["Spanish Latte", "600 DZD"], ["Cortado", "550 DZD"], ["Cappuccino", "500 DZD"], ["Latte", "500 DZD"], ["Americano", "450 DZD"], ["DOUBLE", "550 DZD"], ["Espresso", "350 DZD"]]],
  ["RAMADAN SPECIALS", [["Golden milk", "600 DZD"], ["Banana bread latte", "750 DZD"], ["The maison", "350 DZD"], ["Blossom dates", "750 DZD"], ["Oat Chai with Cardamom", "800 DZD"]]],
  ["MERCH", [["Jute tote bag", "2,800 DZD"], ["Orange iced mug", "4,500 DZD"], ["Casquette", "2,000 DZD"], ["Qahwa world cup t shirt", "2,500 DZD"], ["Assiette qahwa", "5,500 DZD"], ["Orange latte cup Qahwa logo", "4,500 DZD"]]],
  ["DESERTS", [["Fondant au chocolat", "750 DZD"], ["Fondant matcha", "800 DZD"], ["Madeleine", "250 DZD"], ["Chocolate chip cookie", "450 DZD"], ["Warm brownie w ice cream", "900 DZD"], ["Matcha Tiramisu", "750 DZD"], ["Granola bowl", "1,000 DZD"], ["Banana bread", "600 DZD"], ["Cinnamon rolls", "500 DZD"], ["Carrot cake", "550 DZD"], ["Croissant", "350 DZD"], ["Lemon Cake", "550 DZD"]]],
  ["SIGNATURE", [["Vanilla latte whipped cream", "1,000 DZD"], ["Vanilla latte", "750 DZD"], ["Vanilla Maple Latte", "950 DZD"], ["Tonka Latte", "800 DZD"], ["Salted Cookie Cinnamon Latte", "750 DZD"], ["Tiramisu latte", "800 DZD"], ["Qahwa affogato", "750 DZD"], ["Orange espresso Tonic", "800 DZD"], ["Pistachio Spanish Latte", "900 DZD"], ["Rose Latte", "750 DZD"]]],
  ["MILKSHAKES", [["Strawberry milkshake", "850 DZD"], ["Choco milkshake", "850 DZD"]]],
  ["COFFEE", [["Pumpkin latte", "950 DZD"], ["Ginger shot", "350 DZD"], ["Strawberry Hojicha", "1,200 DZD"]]],
];

const categories = ["ALL", ...menu.map(([category]) => category)];

export default function MenuPage() {
  return (
    <><SiteHeader active="menu" /><main className="interior-main menu-page">
      <PageHeading title="OUR MENU">DRINKS &amp; PASTRIES CRAFTED DAILY BY OUR BARISTAS.</PageHeading>
      <section className="menu-controls"><input aria-label="Search the menu" placeholder="⌕  Search the menu..." readOnly /><div className="menu-view"><span>□</span><b>▦</b></div><div className="menu-categories">{categories.map((category, index) => <span className={index === 0 ? "selected" : ""} key={category}>{category}</span>)}</div></section>
      <section className="menu-sections">{menu.map(([category, items], categoryIndex) => <div className="menu-section" key={category}><h2>{category}</h2><div className="menu-grid">{items.map(([name, price], itemIndex) => <article className="menu-card" key={`${category}-${name}`}><div className={`menu-art art-${(categoryIndex + itemIndex) % 6}`} /><div><h3>{name}</h3><p>{price}</p></div></article>)}</div></div>)}</section>
    </main><SiteFooter /></>
  );
}
