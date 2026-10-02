import { SiteFooter, SiteHeader } from "../_components/site";

export const metadata = { title: "Contact | Qahwa" };

export default function ContactPage() {
  return (
    <><SiteHeader active="contact" /><main className="interior-main contact-page">
      <div className="contact-art" aria-hidden="true" />
      <section className="contact-panel"><h1>GET IN TOUCH</h1><div className="contact-fields"><label><span>Name</span><input aria-label="Name" readOnly /></label><label><span>Email</span><input aria-label="Email" readOnly /></label><label><span>Message</span><textarea aria-label="Message" readOnly /></label></div><button className="solid-button rounded" type="button">SEND MESSAGE</button></section>
    </main><SiteFooter /></>
  );
}
