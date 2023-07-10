import Header from './components/header'
import { ThemeProvider } from './theme-provider'
import './globals.css'
import { Roboto } from 'next/font/google'

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
      <body className='bg-white text-black dark:bg-black dark:text-white' suppressHydrationWarning>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
