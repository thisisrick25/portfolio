import Header from './components/header'
import { ThemeProvider } from './theme-provider'
import './globals.css'
import { Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // suppressHydrationWarning
    <html lang="en" className={roboto.className} suppressHydrationWarning>
      <body className='bg-white text-black dark:bg-black dark:text-white text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl selection:bg-yellow-500 selection:text-white dark:selection:text-black max-w-2xl px-4 mx-auto sm:px-6 xl:max-w-3xl xl:px-0 sm:gap-14' suppressHydrationWarning>
        <ThemeProvider>
          <Header />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
