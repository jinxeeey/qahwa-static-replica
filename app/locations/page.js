import { SiteFooter, SiteHeader } from "../_components/site";

export const metadata = { title: "Locations | Qahwa" };

export default function LocationsPage() {
  return <><SiteHeader active="locations" /><main className="interior-main spaces-page"><h1>OUR SPACES</h1><div className="spaces-rule" /></main><SiteFooter /></>;
}
