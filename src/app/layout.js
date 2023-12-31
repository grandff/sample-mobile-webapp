import Link from 'next/link'
import './globals.css'
import Image from 'next/image'
import BottomBar from "./common/mobileNavBar";

export const metadata = {
  title: 'Web tutorilas',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {  
  return (
    <html>      
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      <body>                
        <div className="container mx-auto bg-black text-white h-screen">
          <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">            
                <Image src="/images/logo.svg" alt="logo" width={36} height={36}/>
                <span className="ml-3 text-xl text-white">MDB</span>
              </Link>        
            </div>
          </header>          
          {children}          
          <BottomBar/>
        </div>        
      </body>
    </html>
  )
}
