import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const merriweather = Merriweather({
    weight: ['300', '400', '700', '900'],
    subsets: ['latin'],
    variable: '--font-merriweather',
});

export const metadata: Metadata = {
    title: 'The Real Freedom - Ministry',
    description: 'Freedom Through Christ – Break the Chains, Embrace Life',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
                    crossOrigin="anonymous"
                />
            </head>
            <body className={`${inter.variable} ${merriweather.variable} font-sans`}>{children}</body>
        </html>
    );
}
