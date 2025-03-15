import FacebookPixel from "./components/FacebookPixel";
import Footer from "./components/sections/Footer";
import Navbar from "./components/sections/Navbar";
import Whatsapp from "./components/Whatsapp";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content="tax filing, tax solutions, financial planning, income tax, business tax, GST filing, accounting services, VTAX, vtax professionals, VTAXPROFESSIONALS, VTAXPROSSEINALS, VTAX-PROFESSIONALS, VTAX-PROSSEINALS, V-TAX, vtaxpro, tax consultancy, corporate tax services, tax preparation, tax advisory, small business tax, tax return filing, personal tax planning, tax compliance, bookkeeping services, payroll management, IRS tax help, financial advisory, investment planning"
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
        <meta
          property="og:image"
          content="https://vtaxprofessionals.com/images/og-image.jpg"
        />
        <meta property="og:url" content="https://vtaxprofessionals.com/" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="VTAX - Expert Tax & Financial Solutions"
        />
        <meta
          name="twitter:description"
          content="VTAX provides expert tax filing, financial planning, and accounting services for businesses and individuals."
        />
        <meta
          name="twitter:image"
          content="https://vtaxprofessionals.com/images/og-image.jpg"
        />
        <meta name="facebook-domain-verification" content="l00z0koa3ig1a5r95vbvvzq9i62br9" />
      </head>
      <body>
        <FacebookPixel />
        <Navbar />
        {children}
        <Whatsapp />
        <Footer />
      </body>
    </html>
  );
}
