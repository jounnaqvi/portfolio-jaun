import "./globals.css";

export const metadata = {
  title: "Jaun Naqvi | Full-Stack Developer",
  description:
    "Portfolio of Jaun Naqvi, a MERN and Next.js full-stack developer building AI-powered SaaS products, real-time dashboards, and scalable web apps.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
