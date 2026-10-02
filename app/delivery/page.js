import { PageHeading, SiteFooter, SiteHeader } from "../_components/site";

export const metadata = { title: "Delivery | Qahwa" };

export default function DeliveryPage() {
  return (
    <><SiteHeader active="delivery" /><main className="interior-main delivery-page">
      <PageHeading title="DELIVERY">TELL US WHERE TO SEND YOUR COFFEE</PageHeading>
      <section className="delivery-panel">
        <label>DELIVERY ADDRESS<input placeholder="Start typing an address..." readOnly /></label>
        <button className="outline-button" type="button">USE MY LOCATION</button>
        <div className="map-placeholder" aria-label="Map placeholder" />
        <div className="coordinates"><label>LAT<input value="36.7448" readOnly /></label><label>LNG<input value="3.0461" readOnly /></label></div>
        <button className="solid-button" type="button">CHECK DELIVERY AVAILABILITY</button>
      </section>
    </main><SiteFooter /></>
  );
}
