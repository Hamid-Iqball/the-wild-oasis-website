import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css"

export default function RootLayout({children}){
  return <html>
    <body>
      <header>
        <Logo/>
        <Navigation/>
      </header>
      <main>
        {children}
      </main>
      <footer>
        Copyright by the wild oasis
      </footer>
    </body>
  </html>
}