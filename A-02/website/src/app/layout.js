import "./globals.css";

export const metadata = {
  title: "Hot Spring Portable Spas",
  description: "Static storefront landing page inspired by the provided design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
