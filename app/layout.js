import { Inter } from 'next/font/google'
import './globals.css'
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Srcimg',
  description: 'Get direct links of your images!',
  icons: {
    icon: 'https://i.postimg.cc/HsmwGfkH/Screenshot-2023-12-08-235237.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader
          color="	#7c3aed"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px 	#7c3aed,0 0 5px 	#7c3aed"
          template='<div class="bar" role="bar"><div class="peg"></div></div>'
          zIndex={1600}
          showAtBottom={false} />
        {children}
      </body>
    </html>
  )
}
