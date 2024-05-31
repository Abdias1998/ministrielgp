import { Inter } from "next/font/google";
import "./globals.css";
export const metadata = {
  title: {
    template: "%s | LA GRACE PARLE",
    default: "LA GRACE PARLE", // a default is required when creating a template
  },
  description:
    "Oui le bonheur et la grâce m'accompagneront touts les jours de ma vie et j'habiterai dans la maison de l'Eternel jusqu'a la fin de mes jours! Amen",
  // generator: "Next.js",
  applicationName: "LA GRACE PARLE",
  // referrer: "origin-when-cross-origin",
  keywords: [
    "Note",
    "Etudiant",
    "Note professeur",
    "Etablissement Note",
    "Meilleurs professeurs",
  ],
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.jpg",
    shortcut: "/shortcut-icon.png",
    apple: "/logo.jpg",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  // manifest: "https://nextjs.org/manifest.json",
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Next.js",
  //   description: "The React Framework for the Web",
  //   siteId: "1467726470533754880",
  //   creator: "@nextjs",
  //   creatorId: "1467726470533754880",
  //   images: ["https://nextjs.org/og.png"], // Must be an absolute URL
  // },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
