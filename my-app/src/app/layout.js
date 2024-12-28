import "./globals.css";

import { Noto_Sans_KR } from 'next/font/google';

const noto_Sans_KR = Noto_Sans_KR({
  subsets: ['latin'], // Define the character set
  weight: ['400', '700'], // Define the weights you need
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={noto_Sans_KR.className}>
        {children}
      </body>
    </html>
  );
}

