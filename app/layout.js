import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

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
    </body>
  </html>
}