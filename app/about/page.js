import { SiteFooter, SiteHeader } from "../_components/site";

export const metadata = { title: "About | Qahwa" };

const values = [
  ["PRECISION", "Exactness in every step, from sourcing to extraction. We leave nothing to chance."],
  ["WARMTH", "The inherent hospitality of our culture, translated into every interaction."],
  ["CRAFT", "An unyielding dedication to the artisanal process and the people behind it."],
];

export default function AboutPage() {
  return (
    <><SiteHeader active="about" /><main className="interior-main about-page">
      <section className="atelier"><h1>THE ATELIER</h1><p className="atelier-lead">Qahwa was born in Algiers with a singular focus: to elevate the coffee experience while staying deeply rooted in North African heritage.</p><p className="atelier-copy">We work directly with farmers across the globe, selecting only the finest lots. Every bean is roasted with precision in our Algiers atelier, balancing science and intuition to reveal the true character of the coffee. Our approach is quiet, intentional, and uncompromising.</p><div className="values-grid">{values.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    </main><SiteFooter /></>
  );
}
