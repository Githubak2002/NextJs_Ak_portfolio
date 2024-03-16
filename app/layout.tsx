import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StarsCanvas from '@/components/StarBackground';
import Nav from '@/components/Nav';

// react-hot-toast
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next_Portfolio',
  description: 'next_js portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={` ${inter.className} backgroundCSS    min-h-screen max-w-[1400px] mx-auto  overflow-x-hidden`}>
      {/* <body className={` ${inter.className}    bg-[#05030c] min-h-screen max-w-[1400px] mx-auto  overflow-x-hidden`}> */}

        <Toaster />
        <StarsCanvas />
        <Nav />
        {children}
      </body>
    </html>
  )
}
