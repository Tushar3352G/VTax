import Footer from "./components/sections/Footer";
import Navbar from "./components/sections/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content="tax filing, tax solutions, financial planning, income tax, business tax, GST filing, accounting services, VTAX"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="VTAX - Expert Tax & Financial Solutions"
        />
        <meta
          property="og:description"
          content="VTAX provides expert tax filing, financial planning, and accounting services for businesses and individuals."
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://vtax.com/" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="VTAX - Expert Tax & Financial Solutions"
        />
        <meta
          name="twitter:description"
          content="VTAX provides expert tax filing, financial planning, and accounting services for businesses and individuals."
        />
        <meta name="twitter:image" content="/images/og-image.jpg" />
      </head>

      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
