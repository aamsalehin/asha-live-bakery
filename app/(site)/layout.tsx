import Footer from '../components/footer/Footer'
import FooterV2 from '../components/footer/FooterV2'
import Navbar from '../components/navbar/Navbar'
import NavbarV2 from '../components/navbar/NavbarV2'

 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavbarV2 />
        <main className="pt-20">
          {children}
        </main>
        <FooterV2 />
      </body>
    </html>
  );
}
