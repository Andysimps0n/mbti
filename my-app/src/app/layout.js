import "./globals.css";

import { Gaegu } from 'next/font/google';

const gaegu = Gaegu({
  subsets: ['latin'], // Define the character set
  weight: ['400', '700'], // Define the weights you need
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gaegu.className}>
        {children}
      </body>
    </html>
  );
}
