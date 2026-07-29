import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Transparts | Heavy Duty Industrial & Transport Spare Parts',
  description: 'Global supplier of high-performance transmission, powertrain, hydraulic, and braking components for heavy commercial vehicles and industrial equipment.',
  keywords: 'transparts, transport parts, heavy duty spare parts, truck components, powertrain, hydraulics, industrial equipment',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - 280px)', paddingTop: '80px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
