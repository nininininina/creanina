import type { MetadataRoute } from "next";

// Een "kaart" van de website, zodat Google alle pagina's kan vinden.
const website = "https://creanina.vercel.app";
const paginas = ["", "/dans", "/eten", "/toneel", "/knutselen", "/tekenen", "/over-mij", "/spelletjes"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paginas.map((pagina) => ({
    url: website + pagina,
    lastModified: new Date(),
  }));
}
