import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'The Real Freedom - Ministry',
    description: 'Freedom Through Christ – Break the Chains, Embrace Life',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="vs1lnvi">
            <head data-oid="eykj1i7">
                <link rel="preconnect" href="https://fonts.googleapis.com" data-oid="q0qntva" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                    data-oid="m:_i9m2"
                />

                <link
                    href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&family=Inter:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                    data-oid="0n-40vq"
                />

                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
                    crossOrigin="anonymous"
                    data-oid="8oexhca"
                />
            </head>
            <body className="font-inter" data-oid="9i42m.3">
                {children}
            </body>
        </html>
    );
}
