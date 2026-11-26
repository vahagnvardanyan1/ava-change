import type { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => ({
  name: "Ava Exchange",
  short_name: "Ava Exchange",
  description: "Exchange USD, AMD and RUB to USDT at live rates.",
  start_url: "/",
  display: "standalone",
  background_color: "#F3F7F6",
  theme_color: "#26A17B",
  icons: [
    { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    {
      src: "/icons/icon-maskable-512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "maskable",
    },
  ],
});

export default manifest;
