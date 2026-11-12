import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Android Club VIT Bhopal",
    short_name: "Android Club",
    description:
      "Official student developer chapter at VIT Bhopal University building Kotlin, Jetpack Compose, Flutter, Material You, and on-device AI software.",
    start_url: "/",
    display: "standalone",
    background_color: "#101411",
    theme_color: "#3DDC84",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
