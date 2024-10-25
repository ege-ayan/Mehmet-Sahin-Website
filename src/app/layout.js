import "./globals.css";

export const metadata = {
  title: "Op. Dr. Mehmet Şahin",
  description: "Op. Dr. Mehmet Şahin Resmi Web Sitesi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
