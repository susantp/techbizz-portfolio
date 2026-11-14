import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { content } from '@/content';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GoTop from '@/components/layout/GoTop';
import './globals.css';

export const metadata: Metadata = {
    ...content.layout.metadata,
    openGraph: {
        ...content.layout.metadata.openGraph,
        images: [...content.layout.metadata.openGraph.images],
    },
};
export const viewport: Viewport = content.layout.viewport;

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body>
                <div className="bg-slate-100">
                    <Navbar content={content.layout.navbar} />
                    <main>{children}</main>
                    <GoTop label={content.layout.backToTop.label} />
                    <Footer rightsText={content.layout.footer.rightsText} />
                    <Analytics />
                </div>
            </body>
        </html>
    );
}
