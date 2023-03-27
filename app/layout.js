import './globals.css'

export const metadata = {
  title: 'Fruit Shop',
  description: 'Hyperinflated fruit store - best prices 2033',
}

import { Inter } from 'next/font/google'
import Link from 'next/link'
import Header from './Header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={'min-h-screen flex flex-col relative ' + inter.className}>
        <Header />
        <div className='flex-1'>

          {children}
        </div>
        <footer className='flex items-center flex-wrap justify-center border-t border-solid border-slate-300 p-4 md:p-8'>
          <Link href={'https://www.instagram.com/smoljames'} target="_blank">
            <i className="fa-brands fa-instagram text-slate-700 hover:text-slate-500 cursor-pointer text-2xl sm:text-3xl md:text-4xl"></i>
          </Link>
        </footer>
        <div id="portal"></div>
      </body>
    </html>
  )
}
