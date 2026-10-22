import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GoTop from '@/components/layout/GoTop';
import './globals.css';

export const metadata: Metadata = {
  "title": "Tech Bizz-Software and Web Development",
  "description": "Teh Bizz offering website designing inn Kathmandu, web development, SEO service, software application development,E-commerce Development,  Online marketing in Kathmandu, web hosting in Kathmandu, Techbizz Software and Web Development in Kathmandu",
  "keywords": "Web designing, Software Company In Kathmandu, Software application development in Kathmandu,  Web hosting in Kathmandu, Web development in Kathmandu, SEO service  in Kathmandu, Mobile app development in Kathmandu, E-commerce Development in Kathmandu, Content Management System in Kathmandu, Quality Assurance &amp; Testing in Kathmandu, Re-engineering in Kathmandu, Online marketing in Kathmandu,  Google AdWords in Kathmandu, Domain Management in Kathmandu, Responsive Web Designing in Kathmandu, TechBizz Software and Web Solution, TechBizz in Kathmandu",
  "openGraph": {
    "images": [
      {
        "url": "https://www.techbizzsoft.com/_next/image?url=%2Flogo.png&w=256&q=75",
        "alt": "Tech Bizz"
      }
    ]
  },
  "other": {
    "fb:pages": "487842001414096"
  }
};

export const viewport: Viewport = { themeColor: '#228b22' };

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body>
                <div className="bg-slate-100">
                    <Navbar />
                    <main>{children}</main>
                    <GoTop />
                    <Footer />
                    <Analytics />
                </div>
            </body>
        </html>
    );
}
