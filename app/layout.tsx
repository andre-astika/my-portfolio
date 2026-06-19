import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Andre – Web Designer, Web Developer & Graphic Designer",
  description: "Designing and developing digital experiences with a strong focus on aesthetics, functionality, and user experience.",
  icons: {
    icon: "/images/portfolio-favicon-circle.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}